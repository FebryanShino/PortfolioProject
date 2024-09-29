import React, { useEffect, useState } from 'react';
import GameCard from '../component/game/GameCard';
import { GameResponseType } from '../config/api/responseTypes';
import { callAPI } from '../config/api';
import { Empty } from 'antd';

export default function GameCreationPage() {
  const [games, setGames] = useState<GameResponseType[]>([]);

  async function fetchGames() {
    const data = await callAPI<GameResponseType[]>({
      url: 'https://febryanshino.github.io/PortfolioDatabase/database/creation/game/data.json',
      method: 'GET',
    });
    setGames(data);
  }

  useEffect(() => {
    fetchGames();
  }, []);
  return (
    <>
      <div className="bg-black w-full h-[30rem]"></div>
      {games ? (
        games.map((game) => (
          <GameCard
            backgroundUrl={game.backgroundUrl}
            gameLogoUrl={game.gameLogoUrl}
            playUrl={game.playUrl}
            downloadUrl={game.downloadUrl}
            repositoryUrl={game.repositoryUrl}
            description={game.description}
          />
        ))
      ) : (
        <Empty />
      )}
    </>
  );
}
