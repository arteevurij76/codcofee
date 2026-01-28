import asyncio
import json
import logging
import random
import datetime
from aiogram import Bot, Dispatcher, types, F
from aiogram.enums import ParseMode
from aiogram.filters.command import Command, CommandObject
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import StatesGroup, State
from aiogram.types import KeyboardButton, ReplyKeyboardMarkup, InlineKeyboardButton, InlineKeyboardMarkup, \
    CallbackQuery, InputFile, FSInputFile
from aiogram.utils.keyboard import ReplyKeyboardBuilder
from openai import OpenAI


logging.basicConfig(level=logging.INFO)
bot = Bot(token="7985714869:AAHMAixXe74gxMBgOm9baXPweHr7AR8_NuM")
dp = Dispatcher()

@dp.message(Command("start"))
async def cmd_start(message: types.Message, state: FSMContext):
    await message.answer("""Привет и добро пожаловать в Код Кофе! ☕️
У нас уютно, вкусно и всегда на связи — заказывай кофе, десерты или бронируй столик прямо здесь. 
Готов начать? Жми /menu 😊""")
    webAppInfo = types.WebAppInfo(url="https://arteevurij76.github.io/codcofee/nordic.html")
    builder = ReplyKeyboardBuilder()
    builder.add(types.KeyboardButton(text='Сделать заказ', web_app=webAppInfo))
    await message.answer("Ознакомьтесь с нашим меню😋", reply_markup=builder.as_markup())
    await message.answer_document(FSInputFile("codmenu/menucod1.jpg"))
    await message.answer_document(FSInputFile("codmenu/menucod2.jpg"))

@dp.message(F.content_type == types.ContentType.WEB_APP_DATA)
@dp.message(F.web_app_data)
async def web_app_data_handler(message: types.Message):
    d = eval(message.web_app_data.data)
    result = "<b>Ваш заказ: </b> \n"
    if d["Borsch"] != "0":
        result += "Борщ - " + d["Borsch"] + " штук\n"
    if d["Poke"] != "0":
        result += "Поке - " + d["Poke"] + " штук\n"
    if d["Feta"] != "0":
        result += "Фетучини - " + d["Feta"] + " штук\n"
    if d["Grecha"] != "0":
        result += "Гречка с грибами - " + d["Grecha"] + " штук\n"
    if d["Dranik"] != "0":
        result += "Драники - " + d["Dranik"] + " штук\n"
    Cost= int(d["Borsch"])*320 + int(d["Poke"])*540 + int(d["Feta"])*400 + int(d["Grecha"])*399 + int(d["Dranik"])*530
    result += "С вас - " + str(Cost) + "рублей"
    await message.answer(result, parse_mode=ParseMode.HTML)
    #await message.answer(f"✅ Data received from WebApp:\n{message.web_app_data.data}")

async def main():
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())