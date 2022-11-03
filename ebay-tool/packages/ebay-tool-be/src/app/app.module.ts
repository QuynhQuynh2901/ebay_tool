import { Module } from '@nestjs/common'
import { CoreModule } from "@ebay-tool/core"
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from '../user/user.entity';
import { UsersModule } from '../user/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USERNAMEMYSQL,
      password: process.env.PASSWORDMYSQL,
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
