import { Module } from '@nestjs/common';
import { RestModule } from './application/rest/rest.module';

@Module({
  imports: [RestModule],
  providers: [],
})
export class AppModule {}
