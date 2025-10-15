import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Character {
  id: number;
  name: string;
  role: string;
  type: 'hero' | 'enemy';
  description: string;
  health: number;
  damage: number;
  special: string;
  image: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: 'Survivor',
    role: 'Главный герой',
    type: 'hero',
    description: 'Обычный человек, пытающийся выжить в мире, охваченном тьмой. Использует найденное оружие и ловкость.',
    health: 100,
    damage: 25,
    special: 'Быстрое восстановление',
    image: 'https://v3b.fal.media/files/b/zebra/5yp9umhIW6pt8Au5yKZLW_output.png'
  },
  {
    id: 2,
    name: 'Shadow Hunter',
    role: 'Элитный боец',
    type: 'hero',
    description: 'Мастер скрытности и точных ударов. Охотится на монстров в темноте, используя тактику и опыт.',
    health: 90,
    damage: 40,
    special: 'Невидимость',
    image: 'https://v3b.fal.media/files/b/zebra/5yp9umhIW6pt8Au5yKZLW_output.png'
  },
  {
    id: 3,
    name: 'Medic',
    role: 'Целитель',
    type: 'hero',
    description: 'Поддерживает команду, исцеляя раны и создавая защитные барьеры от темных сил.',
    health: 80,
    damage: 15,
    special: 'Групповое исцеление',
    image: 'https://v3b.fal.media/files/b/zebra/5yp9umhIW6pt8Au5yKZLW_output.png'
  },
  {
    id: 4,
    name: 'Corrupted Soul',
    role: 'Базовый враг',
    type: 'enemy',
    description: 'Потерянная душа, поглощенная тьмой. Медленно движется, но атакует всех живых.',
    health: 60,
    damage: 20,
    special: 'Заражение тьмой',
    image: 'https://v3b.fal.media/files/b/zebra/5yp9umhIW6pt8Au5yKZLW_output.png'
  },
  {
    id: 5,
    name: 'Void Beast',
    role: 'Элитный враг',
    type: 'enemy',
    description: 'Огромное существо из пустоты. Обладает невероятной силой и выносливостью.',
    health: 200,
    damage: 45,
    special: 'Темный вихрь',
    image: 'https://v3b.fal.media/files/b/zebra/5yp9umhIW6pt8Au5yKZLW_output.png'
  },
  {
    id: 6,
    name: 'Nightmare',
    role: 'Босс',
    type: 'enemy',
    description: 'Воплощение страха и тьмы. Финальный босс, способный призывать миньонов и искажать реальность.',
    health: 500,
    damage: 60,
    special: 'Призыв тьмы',
    image: 'https://v3b.fal.media/files/b/zebra/5yp9umhIW6pt8Au5yKZLW_output.png'
  }
];

const Index = () => {
  const [filter, setFilter] = useState<'all' | 'hero' | 'enemy'>('all');

  const filteredCharacters = characters.filter(char => 
    filter === 'all' ? true : char.type === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-[#1a0000]">
      <header className="border-b border-secondary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Skull" size={32} className="text-danger" />
              <h1 className="text-4xl font-bold tracking-wider text-white forsaken-title">FORSAKEN</h1>
            </div>
            <nav className="flex gap-4">
              <Button variant="ghost" className="text-muted-foreground hover:text-white">
                <Icon name="Menu" size={20} />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 text-white tracking-wide">Персонажи мира Forsaken</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Откройте для себя героев, которые борются против тьмы, и врагов, которые пытаются поглотить мир
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
            className="forsaken-button"
          >
            Все персонажи
          </Button>
          <Button 
            onClick={() => setFilter('hero')}
            variant={filter === 'hero' ? 'default' : 'outline'}
            className="forsaken-button"
          >
            <Icon name="Shield" size={18} className="mr-2" />
            Герои
          </Button>
          <Button 
            onClick={() => setFilter('enemy')}
            variant={filter === 'enemy' ? 'default' : 'outline'}
            className="forsaken-button-danger"
          >
            <Icon name="Skull" size={18} className="mr-2" />
            Враги
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((character, index) => (
            <Card 
              key={character.id} 
              className="character-card overflow-hidden border-2 border-secondary hover:border-danger transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl text-white">{character.name}</CardTitle>
                      <Badge 
                        variant={character.type === 'hero' ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {character.type === 'hero' ? 'ГЕРОЙ' : 'ВРАГ'}
                      </Badge>
                    </div>
                    <CardDescription className="text-danger font-semibold">
                      {character.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-secondary bg-[#1a0000]">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {character.description}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="stat-box">
                    <Icon name="Heart" size={16} className="text-danger mb-1" />
                    <div className="text-xs text-muted-foreground">Здоровье</div>
                    <div className="text-lg font-bold text-white">{character.health}</div>
                  </div>
                  <div className="stat-box">
                    <Icon name="Swords" size={16} className="text-danger mb-1" />
                    <div className="text-xs text-muted-foreground">Урон</div>
                    <div className="text-lg font-bold text-white">{character.damage}</div>
                  </div>
                  <div className="stat-box">
                    <Icon name="Zap" size={16} className="text-danger mb-1" />
                    <div className="text-xs text-muted-foreground">Особое</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-secondary">
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={14} className="text-danger" />
                    <span className="text-sm font-medium text-white">{character.special}</span>
                  </div>
                </div>

                <Button className="w-full forsaken-button-stats mt-2">
                  <Icon name="Info" size={16} className="mr-2" />
                  Детальная статистика
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-secondary bg-background/95 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Skull" size={20} className="text-danger" />
            <p className="text-sm text-muted-foreground">Forsaken Wiki - Информация о персонажах</p>
          </div>
          <p className="text-xs text-muted-foreground">Выживайте в темноте</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;