import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import {
  createPropertySchema,
  CreatePropertyZodDto,
} from './dto/createPropertyZod.dto';
import { RequestHeader } from './pipes/request-header';
import { HeadersDto } from './dto/headers.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'This action returns all property';
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return `This action returns a ${id} property ${sort}`;
  }
  @Post()
  //   @UsePipes(
  //     new ValidationPipe({
  //       whitelist: true,
  //       forbidNonWhitelisted: true,
  //     }),
    // )
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  @HttpCode(201)
  create(
    @Body() createPropertyDto: CreatePropertyZodDto,
    // @Body('name') name: string,
  ) {
    // console.log(createPropertyDto);
    return { ...createPropertyDto }; ///'This action adds a new property';
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @RequestHeader(new ValidationPipe({ validateCustomDecorators: true })) headers: HeadersDto,
  ) {
    return `This action updates a #${id} property with headers: ${JSON.stringify(headers)}`;
  }
}
