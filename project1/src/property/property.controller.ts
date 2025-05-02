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
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  @HttpCode(201)
  create(
    @Body() createPropertyDto: CreatePropertyDto,
    @Body('name') name: string,
  ) {
    console.log(createPropertyDto);
    return { ...createPropertyDto, name }; ///'This action adds a new property';
  }

  @Patch(':id')
  update(@Param('id', ParseIdPipe) id) {
    return `This action updates a #${id} property`;
  }
}
