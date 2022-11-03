import { Module } from '@nestjs/common'
import { CoreModule } from "@ebay-tool/core"
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from '../user/user.entity';
import { UsersModule } from '../user/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '30092018tu',
      database: 'ebay-tool',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CoreModule, 
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
