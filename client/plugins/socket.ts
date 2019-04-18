import io from 'socket.io-client';

export default async (ctx: any, inject: (name: string, value: any) => void) => {
    const socket = io('http://localhost:3001');

    ctx.$socket = socket;
    inject('socket', socket);
};
