import React, { useState } from 'react';
import { OpenAI } from 'openai';
import { Link } from 'react-router-dom';

const initialItem = { emoji: '🪨', name: 'Камень' };

const WBR: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(initialItem);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: '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'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const prompt = `
        У нас есть предмет: ${currentItem.name} (${currentItem.emoji}).
        Пользователь предлагает: ${input.trim()}.
        Определите:
        1. Побеждает ли предмет пользователя исходный предмет?
        2. Если побеждает, придумайте новый предмет с эмодзи и кратким названием в формате: Новый предмет: [название] ([эмодзи]).
        Если не побеждает, просто напишите "Не побеждает".
      `;

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
      });

      const result = response.choices[0]?.message?.content || '';
      if (result.includes('Не побеждает')) {
        setIsGameOver(true);
      } else {
        const match = /Новый предмет: (.+) \((.+)\)/i.exec(result);
        const newItem = match
          ? { name: match[1], emoji: match[2] }
          : { name: '???', emoji: '❓' };

        setCurrentItem(newItem);
        setScore((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      alert('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const restartGame = () => {
    setCurrentItem(initialItem);
    setScore(0);
    setIsGameOver(false);
    setInput('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Что бьёт камень?</h1>
      {isGameOver ? (
        <div>
          <h2>Игра окончена!</h2>
          <p>Ваш счёт: {score}</p>
          <button onClick={restartGame}>Начать заново</button>
        </div>
      ) : (
        <div>
          <div style={{ fontSize: '100px' }}>{currentItem.emoji}</div>
          <p>{`Что бьёт этот ${currentItem.name}?`}</p>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ваш вариант"
            disabled={loading}
          />
          <button onClick={handleSend} disabled={loading}>
            {loading ? 'Проверяем...' : 'Отправить'}
          </button>
          <p>Счёт: {score}</p>
          <Link to={"/aihackathon/"}> 
        <h3> <sup>На главную </sup></h3>
        </Link>
        </div>
        
      )}
    </div>
  );
};

export default WBR;
