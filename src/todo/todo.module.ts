import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { AppService } from 'src/app.service';
import { AuthentictionMiddleware } from 'src/authentiction/authentiction.middleware';

@Module({
    controllers:[TodoController],
    providers:[TodoService,AppService]
})
export class TodoModule implements NestModule{ // we have to create this class as it is to use an middleware 
    configure(consumer: MiddlewareConsumer) { //we have to create an function called cofigure which help us to do configure the middleware with routes
        consumer.apply(AuthentictionMiddleware) //This is used to tell form where we have to consume the middleware as we have only one middleware so we use that
        .forRoutes('todo/get-todos') //then we select he routes on that we have to assign it like in this we are using an 'todo' for whole routes start with the todo and 2. we can also use it for the particular route like todo/get-todos
    }
}
