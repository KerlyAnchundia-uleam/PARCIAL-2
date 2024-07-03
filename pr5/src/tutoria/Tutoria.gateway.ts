import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { TutoriaService } from './Tutoria.service';
import { Server, Socket } from 'socket.io';
import { CreateTutoriaDto } from './dto/Tutoria.dto.';

@WebSocketGateway({ cors: true })
export class TutoriaGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly TutoriaService: TutoriaService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.TutoriaService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.TutoriaService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.TutoriaService.removeClient(client.id);
    this.wss.emit('clients-updated', this.TutoriaService.getConnectedClients());
  }

  @SubscribeMessage('enviar-tutoria')
  async onMessageFromClient(client: Socket, payload: CreateTutoriaDto): Promise<void> {
    const tutoria = await this.TutoriaService.create(payload);
    this.wss.emit('receive-tutoria', {
      fullName: this.TutoriaService.getUserfullName(client.id),
      message: tutoria,
    });
  }
}
