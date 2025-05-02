import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';

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
    @HttpCode(201)
    create(@Body() createPropertyDto: any, @Body('name') name: string) {
        console.log(createPropertyDto);
        return { ...createPropertyDto, name }; ///'This action adds a new property';
    }
}
