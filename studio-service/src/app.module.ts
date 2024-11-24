import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatsModule,
    // MongooseModule.forRoot(
    //   'mongodb://mongo:ssO098Qbq241EOT553QjR061fsX932ET@172.19.255.200:27017/studio?authSource=admin&authMechanism=SCRAM-SHA-1',
    //   {
    //     connectionName: 'studio',
    //     // useNewUrlParser: true,
    //     // useUnifiedTopology: true,
    //   },
    // ),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://mongo:ssO098Qbq241EOT553QjR061fsX932ET@172.19.255.200:27017/studio?authSource=admin&authMechanism=SCRAM-SHA-1',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
