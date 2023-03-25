import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestGuard } from './core/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new RequestGuard());
  await app.listen(3000);
}
bootstrap();
