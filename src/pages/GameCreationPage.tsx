import React, { useEffect, useState } from 'react';
import GameCard from '../component/game/GameCard';
import { GameResponseType } from '../config/api/responseTypes';
import { callAPI } from '../config/api';
import { Empty, Flex, Typography } from 'antd';
import ContentWrapper from '../component/ContentWrapper';

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
      <div className="bg-black w-full h-[30rem]">
        <ContentWrapper>
          <Flex
            vertical
            justify="flex-end"
            align="flex-start"
            className="text-left h-full"
          >
            <Typography.Title style={{ color: 'white' }} level={1}>
              Discover Games
            </Typography.Title>
            <Typography.Text style={{ color: 'white' }}>
              Developed by FebryanShino
            </Typography.Text>
          </Flex>
        </ContentWrapper>
      </div>
      {games ? (
        games.map((game) => (
          <GameCard
            author={game.author}
            gameEngine={game.gameEngine}
            backgroundUrl={game.backgroundUrl}
            gameLogoUrl={game.gameLogoUrl}
            playUrl={game.playUrl}
            downloadUrl={game.downloadUrl}
            repositoryUrl={game.repositoryUrl}
            description={game.description}
            disclaimer={game.disclaimer}
          />
        ))
      ) : (
        <Empty />
      )}
    </>
  );
}
