import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from "./app.controller";
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports : [AppService]
})
export class AppModule {}