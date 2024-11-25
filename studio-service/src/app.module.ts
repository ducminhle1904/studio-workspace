import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user.module';
import { RequestIdMiddleware } from './middleware/request.id.middleware';
import { LoggingMiddleware } from './middleware/request.log.middleware';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://mongo:ssO098Qbq241EOT553QjR061fsX932ET@172.18.0.5:27017/studio?authSource=admin&authMechanism=SCRAM-SHA-1',
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(RequestIdMiddleware, LoggingMiddleware).forRoutes('*');
  }
}
