import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { CreateTutoriaDto } from './dto/Tutoria.dto.';
import { Tutoria } from './Entity/entiti.Tutoria';

interface User {
    id: string;
    name: string;
    isActive: boolean    
}

interface ConnectedClients {
    [id: string]: {
        socket: Socket;
        user: User;
    }
}

const users: User[] = [
    {id: '1', name: 'Pedro', isActive: true},
    {id: '2', name: 'Laura', isActive: true},
    {id: '3', name: 'Ana', isActive: true}
]

@Injectable()
export class TutoriaService {
  constructor(
    @InjectRepository(Tutoria)
    private readonly tutoriaRepository: Repository<Tutoria>
  ) {}

  private connectedClients: ConnectedClients = {};

  async create(data: CreateTutoriaDto): Promise<Tutoria> {
    const newTutoria = this.tutoriaRepository.create(data);
    return this.tutoriaRepository.save(newTutoria);
  }

  registerClient(socket: Socket, userId: string) {
    const user = users.find(user => user.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.isActive) {
      throw new Error('User is not active');
    }

    this.checkUserConnection(user);

    this.connectedClients[socket.id] = {
      socket: socket,
      user: user
    }
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getUserfullName(socketId: string): string {
    return this.connectedClients[socketId].user.name;
  }

  updateUserStatus(user: User) {
    const client = this.connectedClients[user.id];
    if (client) {
      client.user = user;
    }
  }

  checkUserConnection(user: User) {
    let connectionCount = 0;

    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        connectionCount++;
        if (connectionCount >= 3) {
          throw new Error('User has reached the maximum number of connections (3)');
        }
      }
    }
  }
}
