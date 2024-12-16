"use client";

import "./zxc.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewYearGreetings: React.FC = () => {
  const [greeting, setGreeting] = useState('');

  const greetingsList = [
    'С Новым годом! Пусть этот год принесет счастье и успех!',
    'Пусть волшебство праздника согревает ваше сердце весь год!',
    'Желаем здоровья, радости и исполнения всех желаний!',
    'Пусть Новый год будет ярким и незабываемым!',
    'Счастья вам, вашим близким и удачи во всех начинаниях!',
    'Пусть каждый день нового года будет наполнен улыбками!',
    'Пусть снег принесет вам вдохновение и теплоту!',
    'С Новым годом! Пусть все мечты станут реальностью!',
    'Здоровья, благополучия и настоящего новогоднего чуда!',
    'Желаем, чтобы Новый год был наполнен радостью и светом!',
    'Пусть счастье и любовь окружат вас в этом году!',
    'С Новым годом! Пусть все хорошее остается, а плохое уходит!',
    'Желаем тепла, уюта и удачи в новом году!',
    'Пусть Новый год будет щедрым на яркие эмоции и моменты!',
    'Желаем мира, добра и исполнения самых заветных желаний!',
    'С Новым годом! Пусть ваши близкие всегда будут рядом!',
    'Пусть этот год принесет множество приятных сюрпризов!',
    'Счастья в дом, любви в сердце и успеха в каждом деле!',
    'Пусть жизнь будет сказкой, полной чудес и волшебства!',
    'Желаем процветания, вдохновения и радостных событий!',
    'С Новым годом! Пусть каждый день будет незабываемым!',
    'Пусть звезды освещают ваш путь к мечтам!',
    'С Новым годом! Пусть этот год станет лучшим в вашей жизни!',
    'Пусть ваша семья будет счастлива и здорова весь год!',
    'Желаем успеха, здоровья и неиссякаемой энергии в новом году!'
  ];

  const generateGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetingsList.length);
    setGreeting(greetingsList[randomIndex]);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'var(--tg-theme-background-color)',
      backgroundSize: 'cover',
      textAlign: 'center',
    }}>
      <h1 style={{
        color: '#ff3e96',
        fontSize: '2rem',
        marginBottom: '20px',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
      }}>
        ✨ Генератор Новогодних Поздравлений ✨
      </h1>
      <button style={{
        padding: '10px 20px',
        fontSize: '1.2rem',
        color: '#fff',
        backgroundColor: 'var(--tg-theme-background-color)',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      onClick={generateGreeting}>
        Получить поздравление
      </button>
      {greeting && (
        <p style={{
          marginTop: '20px',
          fontSize: '1.5rem',
          color: 'var(--tg-theme-text-color)',
          fontStyle: 'italic',
          padding: '10px 20px',
          border: '1px dashed #ff3e96',
          backgroundColor: 'var(--tg-theme-background-color)',
          borderRadius: '10px',
        }}>
          {greeting}
          
        </p>
        
      )}
      <Link to={"/aihackathon/"}> 
        <h3> <sup>На главную </sup></h3>
        </Link>
    </div>
    
  );
};

export default NewYearGreetings;
