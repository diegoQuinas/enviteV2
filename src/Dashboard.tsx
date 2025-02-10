import React, { useState } from 'react';

const Dashboard = () => {
  const [participants, setParticipants] = useState([
    {
      name: 'raulmanya22',
      score: 22,
      teams: [{ name: 'Peñarol' }, { name: 'Francia' }],
    },
    {
      name: 'futbolero99',
      score: 35,
      teams: [{ name: 'Nacional' }, { name: 'Argentina' }],
    },
    {
      name: 'golazo2023',
      score: 18,
      teams: [{ name: 'Brasil' }, { name: 'España' }],
    },
    {
      name: 'fanaticodelgol',
      score: 42,
      teams: [{ name: 'Italia' }, { name: 'Alemania' }],
    },
    {
      name: 'campeon_uy',
      score: 28,
      teams: [{ name: 'Uruguay' }, { name: 'Inglaterra' }],
    },
    {
      name: 'charrua_10',
      score: 30,
      teams: [{ name: 'Chile' }, { name: 'Colombia' }],
    },
    {
      name: 'futbolpasion',
      score: 25,
      teams: [{ name: 'México' }, { name: 'Perú' }],
    },
    {
      name: 'estrella_del_sur',
      score: 40,
      teams: [{ name: 'Argentina' }, { name: 'Paraguay' }],
    },
    {
      name: 'golymate',
      score: 15,
      teams: [{ name: 'Venezuela' }, { name: 'Ecuador' }],
    },
    {
      name: 'jugador_fantasia',
      score: 50,
      teams: [{ name: 'Brasil' }, { name: 'Portugal' }],
    },
    {
      name: 'penaltymaster',
      score: 19,
      teams: [{ name: 'Francia' }, { name: 'Croacia' }],
    },
    {
      name: 'var_lover',
      score: 22,
      teams: [{ name: 'España' }, { name: 'Japón' }],
    },
    {
      name: 'tikitaka',
      score: 36,
      teams: [{ name: 'Alemania' }, { name: 'Italia' }],
    },
    {
      name: 'defensor_uy',
      score: 12,
      teams: [{ name: 'Uruguay' }, { name: 'Argentina' }],
    },
    {
      name: 'golazointernacional',
      score: 47,
      teams: [{ name: 'Inglaterra' }, { name: 'Brasil' }],
    },
  ]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-naranja to-orange-900">
      <div className="border border-2 border-azul-oscuro bg-white rounded-lg shadow-lg p-8 w-full m-10 text-center">
        {/* Logo */}
        <div className="flex flex-row items-center mb-6">
          <img
            src="src/assets/logo.jpg" // Cambia esto por el logo que prefieras
            alt="Penca Envite Fútbol"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="m-2 text-xl text-orange-600">Penca Solidaria</h1>
          <h1 className="m-2 text-2xl font-bold text-blue-600">
            Envite Fútbol
          </h1>
        </div>

        {/* Ranking */}
        <RankingTable participants={participants} />
      </div>
    </div>
  );
};

export default Dashboard;

const RankingTable = ({ participants }: { participants: any[] }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Ranking de Participantes
      </h2>
      <div className="grid grid-cols-4 bg-green-500 text-white font-bold text-center py-2 rounded-t-lg">
        <div>#</div>
        <div>Nombre</div>
        <div>Puntaje</div>
        <div>Equipos</div>
      </div>
      <div className="divide-y divide-gray-200">
        {participants.map((participant, index) => (
          <div
            key={participant.name}
            className="grid grid-cols-4 text-center py-2 hover:bg-green-100"
          >
            <div>{index + 1}</div>
            <div>{participant.name}</div>
            <div>{participant.score}</div>
            <div>
              {participant.teams.map((team: any, i: number) => (
                <span
                  key={i}
                  className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded mr-1 text-sm"
                >
                  {team.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
