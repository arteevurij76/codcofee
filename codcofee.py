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
from openai import OpenAI


logging.basicConfig(level=logging.INFO)
bot = Bot(token="7985714869:AAHMAixXe74gxMBgOm9baXPweHr7AR8_NuM")
dp = Dispatcher()

@dp.message(Command("start"))
async def cmd_start(message: types.Message, state: FSMContext):
    await message.answer("""Привет и добро пожаловать в Код Кофе! ☕️

У нас уютно, вкусно и всегда на связи — заказывай кофе, десерты или бронируй столик прямо здесь. 
Готов начать? Жми /menu 😊""")
    await message.answer("Ознакомьтесь с нашим меню😋")
    await message.answer_document(FSInputFile("codmenu.jpg"))
    await message.answer_document(FSInputFile("codmenu2.jpg"))





async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())