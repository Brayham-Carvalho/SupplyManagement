import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { add } from '@foundation/sample-lib'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())

  console.log('add ', add(3, 4))

  const config = new DocumentBuilder()
    .setTitle('Sys Controle | Brayham Carvalho')
    .setDescription(
      `Procurando pela API GraphQL?
      <br/>
Use <a href="/graphql" target="_blank">/graphql</a>.
ou,
Você também pode precisar usar o <a target="_blank" href="http://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:3000/graphql&document=query items{items{id  }}
">Apollo explorer</a> para uma melhor experiência.

      `,
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)

  await app.listen(3000)
}
bootstrap()
