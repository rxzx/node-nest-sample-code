

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { API_DEFAULT_PREFIX, API_VERSION } from './api/shared/constants';

declare const module: any;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set Api Default prefix
  app.setGlobalPrefix(API_DEFAULT_PREFIX);

  // Swagger UI Configuration
  const options = new DocumentBuilder()
    .setTitle('Node-Nest-Sample-Code')
    .setDescription('Node-Nest-Sample-Code APIs Documentation')
    .setVersion(API_VERSION)
    .addTag('Node-Nest-Sample-Code')
    .setBasePath(API_DEFAULT_PREFIX)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(API_DEFAULT_PREFIX, app, document);

  //Enable Cors
  app.enableCors();

  await app.listen(3000);

  //Integrated Webpack
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();