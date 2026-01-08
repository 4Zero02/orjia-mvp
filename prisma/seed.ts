// prisma/seed.ts
import 'dotenv/config'
import prisma from '../src/lib/prisma' // Ajuste o caminho se necessário
import { StatusTime, MatchRound } from '../src/app/generated/prisma/client'

// Não precisa criar PrismaClient aqui, usa o que já existe!

async function main() {
  console.log('🌱 Iniciando seed...')

  // Limpar dados existentes
  await prisma.match.deleteMany()
  await prisma.eventResult.deleteMany()
  await prisma.tournamentResult.deleteMany()
  await prisma.tournament.deleteMany()
  await prisma.event.deleteMany()
  await prisma.atletica.deleteMany()

  console.log('🗑️  Dados anteriores removidos')

  // ============ ATLÉTICAS ============
  console.log('📚 Criando atléticas...')
  
  const atleticas = await Promise.all([
    prisma.atletica.create({
      data: {
        name: 'Atlética de Medicina',
        acronym: 'AAAMED',
        course: 'Medicina',
        email: 'contato@aaamed.com',
        instagram: '@aaamed_oficial',
        logo: 'https://placehold.co/200x200/4CAF50/white?text=AAAMED'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Engenharia',
        acronym: 'CAENGA',
        course: 'Engenharia Civil',
        email: 'caenga@uft.edu.br',
        instagram: '@caenga_uft',
        logo: 'https://placehold.co/200x200/2196F3/white?text=CAENGA'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Direito',
        acronym: 'AADIR',
        course: 'Direito',
        email: 'atletica.direito@gmail.com',
        instagram: '@aadir_uft',
        logo: 'https://placehold.co/200x200/FF9800/white?text=AADIR'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Computação',
        acronym: 'CompAtlética',
        course: 'Ciência da Computação',
        email: 'compatletica@uft.edu.br',
        instagram: '@compatletica',
        logo: 'https://placehold.co/200x200/9C27B0/white?text=COMP'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Administração',
        acronym: 'AAAADM',
        course: 'Administração',
        email: 'atletica.adm@outlook.com',
        instagram: '@aaaadm_palmas',
        logo: 'https://placehold.co/200x200/F44336/white?text=ADM'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Enfermagem',
        acronym: 'AAENF',
        course: 'Enfermagem',
        email: 'atletica.enfermagem@uft.edu.br',
        instagram: '@aaenf_uft',
        logo: 'https://placehold.co/200x200/E91E63/white?text=ENFER'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Agronomia',
        acronym: 'AAAAGRO',
        course: 'Agronomia',
        email: 'agro.atletica@gmail.com',
        instagram: '@aaaagro_palmas',
        logo: 'https://placehold.co/200x200/8BC34A/white?text=AGRO'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Pedagogia',
        acronym: 'AAPED',
        course: 'Pedagogia',
        email: 'aaped@uft.edu.br',
        instagram: '@aaped_uft',
        logo: 'https://placehold.co/200x200/00BCD4/white?text=PED'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Biologia',
        acronym: 'AABIO',
        course: 'Biologia',
        email: 'atletica.bio@gmail.com',
        instagram: '@aabio_uft',
        logo: 'https://placehold.co/200x200/009688/white?text=BIO'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Psicologia',
        acronym: 'AAPSI',
        course: 'Psicologia',
        email: 'aapsi@uft.edu.br',
        instagram: '@aapsi_palmas',
        logo: 'https://placehold.co/200x200/673AB7/white?text=PSI'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Arquitetura',
        acronym: 'AAARQ',
        course: 'Arquitetura e Urbanismo',
        email: 'atletica.arq@gmail.com',
        instagram: '@aaarq_uft',
        logo: 'https://placehold.co/200x200/795548/white?text=ARQ'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Farmácia',
        acronym: 'AAFARM',
        course: 'Farmácia',
        email: 'aafarm@uft.edu.br',
        instagram: '@aafarm_palmas',
        logo: 'https://placehold.co/200x200/03A9F4/white?text=FARM'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Educação Física',
        acronym: 'AAAEF',
        course: 'Educação Física',
        email: 'atletica.edfisica@gmail.com',
        instagram: '@aaaef_uft',
        logo: 'https://placehold.co/200x200/FF5722/white?text=EDF'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Nutrição',
        acronym: 'AANUT',
        course: 'Nutrição',
        email: 'aanut@uft.edu.br',
        instagram: '@aanut_palmas',
        logo: 'https://placehold.co/200x200/FFC107/white?text=NUT'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Veterinária',
        acronym: 'AAAVET',
        course: 'Medicina Veterinária',
        email: 'atletica.vet@gmail.com',
        instagram: '@aaavet_uft',
        logo: 'https://placehold.co/200x200/607D8B/white?text=VET'
      }
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Odontologia',
        acronym: 'AAAODONTO',
        course: 'Odontologia',
        email: 'odonto.atletica@uft.edu.br',
        instagram: '@aaaodonto_palmas',
        logo: 'https://placehold.co/200x200/00ACC1/white?text=ODONTO'
      }
    })
  ])

  console.log(`✅ ${atleticas.length} atléticas criadas`)

  // ============ EVENTOS ============
  console.log('🎉 Criando eventos...')

  const event2024 = await prisma.event.create({
    data: {
      name: 'Jogos Universitários 2024',
      year: 2024,
      dateStart: new Date('2024-03-15T08:00:00'),
      dateEnd: new Date('2024-03-20T18:00:00'),
      status: StatusTime.COMPLETED
    }
  })

  const event2025 = await prisma.event.create({
    data: {
      name: 'InterUFT 2025',
      year: 2025,
      dateStart: new Date('2025-05-10T08:00:00'),
      dateEnd: new Date('2025-05-15T18:00:00'),
      status: StatusTime.UPCOMING
    }
  })

  console.log('✅ 2 eventos criados')

  // ============ TORNEIOS - EVENTO 2024 (FINALIZADO) ============
  console.log('🏆 Criando torneios do evento 2024...')

  const futsalMasc2024 = await prisma.tournament.create({
    data: {
      name: 'Futsal Masculino',
      description: 'Torneio de futsal masculino - categoria principal',
      eventId: event2024.id,
      status: StatusTime.FINISHED
    }
  })

  const volei2024 = await prisma.tournament.create({
    data: {
      name: 'Vôlei de Praia',
      description: 'Torneio de vôlei de praia misto',
      eventId: event2024.id,
      status: StatusTime.FINISHED
    }
  })

  // ============ PARTIDAS - FUTSAL MASCULINO 2024 ============
  console.log('⚽ Criando partidas do Futsal Masculino 2024...')

  // Oitavas de final (8 jogos, 16 times)
  await prisma.match.createMany({
    data: [
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[0].id,
        team2Id: atleticas[15].id,
        scoreTeam1: 5,
        scoreTeam2: 2,
        round: MatchRound.OITAVAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-15T09:00:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[1].id,
        team2Id: atleticas[14].id,
        scoreTeam1: 4,
        scoreTeam2: 1,
        round: MatchRound.OITAVAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-15T10:30:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[2].id,
        team2Id: atleticas[13].id,
        scoreTeam1: 3,
        scoreTeam2: 2,
        round: MatchRound.OITAVAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-15T12:00:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[3].id,
        team2Id: atleticas[12].id,
        scoreTeam1: 6,
        scoreTeam2: 3,
        round: MatchRound.OITAVAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-15T13:30:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[4].id,
        team2Id: atleticas[11].id,
        scoreTeam1: 4,
        scoreTeam2: 2,
        round: MatchRound.OITAVAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-16T09:00:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[5].id,
        team2Id: atleticas[10].id,
        scoreTeam1: 5,
        scoreTeam2: 4,
        round: MatchRound.OITAVAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-16T10:30:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[6].id,
        team2Id: atleticas[9].id,
        scoreTeam1: 3,
        scoreTeam2: 1,
        round: MatchRound.OITAVAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-16T12:00:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[7].id,
        team2Id: atleticas[8].id,
        scoreTeam1: 7,
        scoreTeam2: 2,
        round: MatchRound.OITAVAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-16T13:30:00')
      }
    ]
  })

  // Quartas de final (4 jogos)
  await prisma.match.createMany({
    data: [
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[0].id, // AAAMED
        team2Id: atleticas[1].id, // CAENGA
        scoreTeam1: 3,
        scoreTeam2: 2,
        round: MatchRound.QUARTAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-17T09:00:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[2].id, // AADIR
        team2Id: atleticas[3].id, // CompAtlética
        scoreTeam1: 4,
        scoreTeam2: 3,
        round: MatchRound.QUARTAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-17T10:30:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[4].id, // AAAADM
        team2Id: atleticas[5].id, // AAENF
        scoreTeam1: 2,
        scoreTeam2: 1,
        round: MatchRound.QUARTAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-18T09:00:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[6].id, // AAAAGRO
        team2Id: atleticas[7].id, // AAPED
        scoreTeam1: 1,
        scoreTeam2: 3,
        round: MatchRound.QUARTAS,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-18T10:30:00')
      }
    ]
  })

  // Semifinais (2 jogos)
  await prisma.match.createMany({
    data: [
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[0].id, // AAAMED
        team2Id: atleticas[2].id, // AADIR
        scoreTeam1: 5,
        scoreTeam2: 3,
        round: MatchRound.SEMI,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-19T14:00:00')
      },
      {
        tournamentId: futsalMasc2024.id,
        team1Id: atleticas[4].id, // AAAADM
        team2Id: atleticas[7].id, // AAPED
        scoreTeam1: 2,
        scoreTeam2: 4,
        round: MatchRound.SEMI,
        status: StatusTime.FINISHED,
        scheduledAt: new Date('2024-03-19T15:30:00')
      }
    ]
  })

  // Disputa 3º lugar
  await prisma.match.create({
    data: {
      tournamentId: futsalMasc2024.id,
      team1Id: atleticas[2].id, // AADIR (perdedor semi 1)
      team2Id: atleticas[4].id, // AAAADM (perdedor semi 2)
      scoreTeam1: 4,
      scoreTeam2: 2,
      round: MatchRound.TERCEIRO_LUGAR,
      status: StatusTime.FINISHED,
      scheduledAt: new Date('2024-03-20T14:00:00')
    }
  })

  // Final
  await prisma.match.create({
    data: {
      tournamentId: futsalMasc2024.id,
      team1Id: atleticas[0].id, // AAAMED
      team2Id: atleticas[7].id, // AAPED
      scoreTeam1: 6,
      scoreTeam2: 4,
      round: MatchRound.FINAL,
      status: StatusTime.FINISHED,
      scheduledAt: new Date('2024-03-20T16:00:00')
    }
  })

  console.log('✅ Partidas do Futsal Masculino criadas')

  // ============ RESULTS - FUTSAL MASCULINO 2024 ============
  console.log('📊 Criando resultados do Futsal Masculino 2024...')

  await prisma.tournamentResult.createMany({
    data: [
      { tournamentId: futsalMasc2024.id, teamId: atleticas[0].id, position: 1, points: 20 }, // AAAMED - Campeão
      { tournamentId: futsalMasc2024.id, teamId: atleticas[7].id, position: 2, points: 18 }, // AAPED - Vice
      { tournamentId: futsalMasc2024.id, teamId: atleticas[2].id, position: 3, points: 16 }, // AADIR - 3º
      { tournamentId: futsalMasc2024.id, teamId: atleticas[4].id, position: 4, points: 14 }, // AAAADM - 4º
      { tournamentId: futsalMasc2024.id, teamId: atleticas[1].id, position: 5, points: 12 }, // CAENGA - 5º
      { tournamentId: futsalMasc2024.id, teamId: atleticas[3].id, position: 6, points: 10 }, // CompAtlética - 6º
      { tournamentId: futsalMasc2024.id, teamId: atleticas[5].id, position: 7, points: 8 },  // AAENF - 7º
      { tournamentId: futsalMasc2024.id, teamId: atleticas[6].id, position: 8, points: 6 },  // AAAAGRO - 8º
      // Participantes fora do top 8 (1 ponto cada)
      { tournamentId: futsalMasc2024.id, teamId: atleticas[8].id, position: null, points: 1 },  // AABIO
      { tournamentId: futsalMasc2024.id, teamId: atleticas[9].id, position: null, points: 1 },  // AAPSI
      { tournamentId: futsalMasc2024.id, teamId: atleticas[10].id, position: null, points: 1 }, // AAARQ
      { tournamentId: futsalMasc2024.id, teamId: atleticas[11].id, position: null, points: 1 }, // AAFARM
      { tournamentId: futsalMasc2024.id, teamId: atleticas[12].id, position: null, points: 1 }, // AAAEF
      { tournamentId: futsalMasc2024.id, teamId: atleticas[13].id, position: null, points: 1 }, // AANUT
      { tournamentId: futsalMasc2024.id, teamId: atleticas[14].id, position: null, points: 1 }, // AAAVET
      { tournamentId: futsalMasc2024.id, teamId: atleticas[15].id, position: null, points: 1 }  // AAAODONTO
    ]
  })

  console.log('✅ Resultados do Futsal Masculino criados')

  // ============ VÔLEI 2024 - Simplificado ============
  console.log('🏐 Criando resultados do Vôlei 2024...')

  await prisma.tournamentResult.createMany({
    data: [
      { tournamentId: volei2024.id, teamId: atleticas[1].id, position: 1, points: 20 }, // CAENGA - Campeão
      { tournamentId: volei2024.id, teamId: atleticas[0].id, position: 2, points: 18 }, // AAAMED - Vice
      { tournamentId: volei2024.id, teamId: atleticas[3].id, position: 3, points: 16 }, // CompAtlética - 3º
      { tournamentId: volei2024.id, teamId: atleticas[5].id, position: 4, points: 14 }, // AAENF - 4º
      { tournamentId: volei2024.id, teamId: atleticas[2].id, position: 5, points: 12 }, // AADIR - 5º
      { tournamentId: volei2024.id, teamId: atleticas[7].id, position: 6, points: 10 }, // AAPED - 6º
      { tournamentId: volei2024.id, teamId: atleticas[4].id, position: 7, points: 8 },  // AAAADM - 7º
      { tournamentId: volei2024.id, teamId: atleticas[6].id, position: 8, points: 6 },  // AAAAGRO - 8º
      // Participantes
      { tournamentId: volei2024.id, teamId: atleticas[8].id, position: null, points: 1 },
      { tournamentId: volei2024.id, teamId: atleticas[9].id, position: null, points: 1 },
      { tournamentId: volei2024.id, teamId: atleticas[10].id, position: null, points: 1 },
      { tournamentId: volei2024.id, teamId: atleticas[11].id, position: null, points: 1 }
    ]
  })

  console.log('✅ Resultados do Vôlei criados')

  // ============ EVENT RESULTS - EVENTO 2024 ============
  console.log('📊 Calculando e criando resultados gerais do evento 2024...')

  // Agrupa todos os results por time para o evento 2024
  const event2024Results = await prisma.tournamentResult.findMany({
    where: {
      tournament: {
        eventId: event2024.id
      }
    },
    include: {
      team: true
    }
  })

  // Calcula pontuação total de cada time no evento
  const teamPointsMap = new Map<number, { teamId: number, totalPoints: number }>()

  event2024Results.forEach(result => {
    const current = teamPointsMap.get(result.teamId) || { teamId: result.teamId, totalPoints: 0 }
    current.totalPoints += result.points
    teamPointsMap.set(result.teamId, current)
  })

  // Converte para array e ordena por pontos (decrescente)
  const teamPointsArray = Array.from(teamPointsMap.values())
    .sort((a, b) => b.totalPoints - a.totalPoints)

  // Cria EventResult para cada time com sua posição
  const eventResultsData = teamPointsArray.map((teamPoints, index) => ({
    eventId: event2024.id,
    teamId: teamPoints.teamId,
    position: index + 1,
    points: teamPoints.totalPoints
  }))

  await prisma.eventResult.createMany({
    data: eventResultsData
  })

  console.log(`✅ ${eventResultsData.length} resultados gerais do evento criados`)

  // Mostra top 5 do evento
  console.log('\n🏆 Top 5 do Evento 2024:')
  for (let i = 0; i < Math.min(5, eventResultsData.length); i++) {
    const result = eventResultsData[i]
    const atletica = atleticas.find(a => a.id === result.teamId)
    console.log(`   ${i + 1}º - ${atletica?.acronym}: ${result.points} pontos`)
  }
  console.log('')

  // ============ TORNEIOS - EVENTO 2025 (FUTURO) ============
  console.log('🏆 Criando torneios do evento 2025...')

  const basquete2025 = await prisma.tournament.create({
    data: {
      name: 'Basquete 3x3',
      description: 'Torneio de basquete 3x3 - categoria aberta',
      eventId: event2025.id,
      status: StatusTime.UPCOMING
    }
  })

  const handebol2025 = await prisma.tournament.create({
    data: {
      name: 'Handebol',
      description: 'Torneio de handebol masculino',
      eventId: event2025.id,
      status: StatusTime.UPCOMING
    }
  })

  // Criar algumas partidas agendadas para 2025
  await prisma.match.createMany({
    data: [
      {
        tournamentId: basquete2025.id,
        team1Id: atleticas[0].id,
        team2Id: atleticas[1].id,
        round: MatchRound.OITAVAS,
        status: StatusTime.SCHEDULED,
        scheduledAt: new Date('2025-05-10T09:00:00')
      },
      {
        tournamentId: basquete2025.id,
        team1Id: atleticas[2].id,
        team2Id: atleticas[3].id,
        round: MatchRound.OITAVAS,
        status: StatusTime.SCHEDULED,
        scheduledAt: new Date('2025-05-10T10:30:00')
      }
    ]
  })

  console.log('✅ Torneios 2025 criados')

  // ============ RESUMO ============
  console.log('\n🎉 Seed concluído com sucesso!')
  console.log('─────────────────────────────────')
  console.log(`📚 Atléticas: ${atleticas.length}`)
  console.log(`🎉 Eventos: 2`)
  console.log(`🏆 Torneios: 4`)
  console.log(`⚽ Partidas: ${await prisma.match.count()}`)
  console.log(`📊 Resultados de Torneios: ${await prisma.tournamentResult.count()}`)
  console.log(`🏅 Resultados de Eventos: ${await prisma.eventResult.count()}`)
  console.log('─────────────────────────────────')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
