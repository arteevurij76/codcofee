import asyncio
import json
import logging
import random
import datetime
from aiogram import Bot, Dispatcher, types, F
from aiogram.enums import ParseMode, ContentType
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

Payment="1744374395:TEST:82e9e7b78d52bf200836"

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
    resultadmin = "<b>Заказ:</b> \n"

    if d["Borsch"] != "0":
        resultadmin += "Борщ - " + d["Borsch"] + " штук\n"
    if d["Poke"] != "0":
        resultadmin += "Поке - " + d["Poke"] + " штук\n"
    if d["Karbonara"] != "0":
        resultadmin += "Карбонара - " + d["Karbonara"] + " штук\n"
    if d["Grecha"] != "0":
        resultadmin += "Гречка с грибами - " + d["Grecha"] + " штук\n"
    if d["Dranik"] != "0":
        resultadmin += "Драники - " + d["Dranik"] + " штук\n"
    if d["Usertel"] != "":
        resultadmin += "Телефон - " + d["Usertel"] + "\n"
    if d["Username"] != "":
        resultadmin += "Имя - " + d["Username"] + "\n"
    Cost= int(d["Borsch"])*320 + int(d["Poke"])*540 + int(d["Karbonara"])*400 + int(d["Grecha"])*399 + int(d["Dranik"])*530
    resultadmin += "Стоимость заказа - " + str(Cost) + "рублей"

    result = "<b>Ваш заказ: </b> \n"
    if d["Borsch"] != "0":
        result += "Борщ - " + d["Borsch"] + " штук\n"
    if d["Poke"] != "0":
        result += "Поке - " + d["Poke"] + " штук\n"
    if d["Karbonara"] != "0":
        result += "Карбонара - " + d["Karbonara"] + " штук\n"
    if d["Grecha"] != "0":
        result += "Гречка с грибами - " + d["Grecha"] + " штук\n"
    if d["Dranik"] != "0":
        result += "Драники - " + d["Dranik"] + " штук\n"
    if d["Usertel"] != "":
        result += "Телефон - " + d["Usertel"] + "\n"
    if d["Username"] != "":
        result += "Имя - " + d["Username"] + "\n"
    Cost= int(d["Borsch"])*320 + int(d["Poke"])*540 + int(d["Karbonara"])*400 + int(d["Grecha"])*399 + int(d["Dranik"])*530
    result += "С вас - " + str(Cost) + "рублей"
    PRICE = types.LabeledPrice(label="Блюда", amount=Cost*100)  # в копейках (руб)
    await message.answer(result, parse_mode=ParseMode.HTML)
    await bot.send_invoice(message.chat.id,
                           title="заказ",
                           description="оплата блюд в кафе КодКофе",
                           provider_token=Payment,
                           currency="rub",
                           is_flexible=True,
                           prices=[PRICE],
                           start_parameter="one-month-subscription",
                           payload="test-invoice-payload")

    #await message.answer(f"✅ Data received from WebApp:\n{message.web_app_data.data}")
    await bot.send_message(1295112335, resultadmin)

@dp.message(F.successful_payment)
async def successful_payment(message: types.Message):
    for j,k in message.successful_payment:
        print(f"{j} = {k}")

async def main():
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())