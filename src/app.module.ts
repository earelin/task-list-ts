import { Module } from '@nestjs/common';
import { RestModule } from './application/rest/rest.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [RestModule, PrometheusModule.register()],
  providers: [],
})
export class AppModule {}
