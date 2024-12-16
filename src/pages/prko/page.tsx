'use client';

import React, { useState } from 'react';

const MyPage: React.FC = () => {
    const [disaster, setDisaster] = useState<string>('');
    const [userPrompt, setUserPrompt] = useState<string>('');
    const [evaluation, setEvaluation] = useState<string>('');

    // API-ключ OpenAI
    const apiKey = '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'; // Замените на ваш API-ключ
    const encodedApiKey = btoa(apiKey); // Кодируем ключ в Base64

    // Функция для генерации случайной катастрофы
    const generateDisaster = () => {
        const disasters = [
            "Внезапное наводнение затапливает ваш дом. Что вы будете делать?",
            "Огромный метеорит направляется прямо к вашей планете. Как вы спасетесь?",
            "На вашем компьютере запущен вирус, который уничтожает все данные. Что вы сделаете, чтобы остановить его?",
            "Зомби-апокалипсис начался, и толпа зомби приближается к вашему укрытию. Ваши действия?",
            "Вокруг вас начался неконтролируемый пожар в лесу. Как вы спасетесь?",
            "Вы застряли на дрейфующем айсберге в открытом океане. Что делать?",
            "Ураган срывает вашу крышу и приближается к вашему городу. Как вы подготовитесь?",
            "Ваш самолет терпит крушение на необитаемом острове. Что вы будете делать?",
            "Вы оказались в лифте, застрявшем на 50-м этаже, и связь снаружи пропала. Как вы выберетесь?",
            "Глобальная пандемия уничтожает половину населения, и вы остались в одиночестве. Что дальше?",
            "Инопланетяне начали вторжение, разрушая крупные города. Как вы выживете?",
            "Вы оказались в тонущей лодке посреди океана. Как вы спасетесь?",
            "Ваша машина застряла на рельсах, а поезд уже приближается. Что вы будете делать?",
            "На вас обрушился снежный обвал, и вы застряли под толщей снега. Ваши действия?",
            "Гигантская трещина разрывает землю, угрожая поглотить ваш дом. Что дальше?",
            "Вы потерялись в густом лесу без еды и воды. Как вы выживете?",
            "Ваше укрытие атакует стая диких животных. Как вы защититесь?",
            "Взрыв на заводе выпускает ядовитый газ в ваш район. Что делать?",
            "Ваша лодка попала в эпицентр шторма. Как вы выживете?",
            "Лава извержения вулкана приближается к вашему городу. Что вы предпримете?",
            "Ваши запасы воды закончились в жаркой пустыне. Как вы доберетесь до спасения?",
            "Ваш космический корабль теряет управление и направляется к черной дыре. Что делать?",
            "Вы застряли в пещере, где внезапно поднялся уровень воды. Как вы выберетесь?",
            "Ваш самолет попадает в зону сильной турбулентности, и пилот потерял сознание. Как вы спасете себя и пассажиров?",
            "Плотина прорвалась, и вода стремительно заливает ваш город. Как вы спасетесь?"
        ];
        
        setDisaster(disasters[Math.floor(Math.random() * disasters.length)]);
        setEvaluation('');
        setUserPrompt('');
    };

    // Функция для оценки ответа
    const evaluateResponse = async () => {
        if (!userPrompt || !disaster) {
            alert('Сначала сгенерируйте катастрофу и введите ответ.');
            return;
        }

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${atob(encodedApiKey)}`, // Декодируем Base64 в оригинальный ключ
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [
                        { role: 'system', content: 'Ты играешь роль судьи. Оценивай, поможет ли данный ответ игрока выжить в катастрофе.' },
                        { role: 'user', content: `Катастрофа: ${disaster}\nОтвет игрока: ${userPrompt}\nПоможет ли это выжить? Объясни.` },
                    ],
                }),
            });

            if (!response.ok) {
                throw new Error(`Ошибка API: ${response.status}`);
            }

            const data = await response.json();
            setEvaluation(data.choices[0]?.message?.content || 'Ошибка: Пустой ответ от модели.');
        } catch (error) {
            setEvaluation(`Ошибка при обращении к OpenAI: ${error}`);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Игра "Выживи в катастрофе"</h1>
            <button
                onClick={generateDisaster}
                style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '20px', cursor: 'pointer', color:'black', backgroundColor:'gray', border:'10px',borderRadius:'10px',}}
            >
                Сгенерировать катастрофу
            </button>
            {disaster && (
                <>
                    <p><strong>Катастрофа:</strong> {disaster}</p>
                    <input
                        type="text"
                        value={userPrompt}
                        onChange={(e) => setUserPrompt(e.target.value)}
                        placeholder="Ваш ответ..."
                        style={{ padding: '10px', fontSize: '16px', width: '300px', marginBottom: '10px' }}
                    />
                    <br />
                    <button
                        onClick={evaluateResponse} className="button"
                        style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '20px', cursor: 'pointer', color:'white', backgroundColor:'green', border:'10px',borderRadius:'10px',}}
                    >
                        Отправить ответ
                    </button>
                    <button
                        className="button"
                        style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '20px', cursor: 'pointer', color:'white', backgroundColor:'green', border:'10px',borderRadius:'10px',}}
                    >
                        главная
                    </button>
                </>
            )}
            {evaluation && (
                <p><strong>Оценка:</strong> {evaluation}</p>
            )}
        </div>
    );
};

export default MyPage;
