// prisma/seed.ts
import 'dotenv/config'
import prisma from '../src/lib/prisma' // Ajuste o caminho se necessário
import { Status, MatchRound, TournamentGender } from '../src/app/generated/prisma/client';

async function main() {
  console.log('🌱 Iniciando seed...');

  // Limpar dados existentes na ordem correta (respeitar foreign keys)
  await prisma.match.deleteMany();
  await prisma.tournamentResult.deleteMany();
  await prisma.eventResult.deleteMany();
  await prisma.tournament.deleteMany();
  await prisma.event.deleteMany();
  await prisma.atletica.deleteMany();

  console.log('🗑️  Dados antigos limpos');

  // ==================== CRIAR ATLÉTICAS ====================
  const atleticas = await Promise.all([
    prisma.atletica.create({
      data: {
        name: 'Atlética de Engenharia',
        slug: 'atletica-engenharia',
        acronym: 'AAEC',
        course: 'Engenharia Civil',
        email: 'contato@atleticaeng.com',
        instagram: '@atleticaeng',
        logo: 'https://i.pravatar.cc/150?img=1',
      },
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Medicina',
        slug: 'atletica-medicina',
        acronym: 'AAMED',
        course: 'Medicina',
        email: 'contato@atleticamed.com',
        instagram: '@atleticamed',
        logo: 'https://i.pravatar.cc/150?img=2',
      },
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Direito',
        slug: 'atletica-direito',
        acronym: 'AADIR',
        course: 'Direito',
        email: 'contato@atleticadir.com',
        instagram: '@atleticadir',
        logo: 'https://i.pravatar.cc/150?img=3',
      },
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Administração',
        slug: 'atletica-administracao',
        acronym: 'AAADM',
        course: 'Administração',
        email: 'contato@atleticaadm.com',
        instagram: '@atleticaadm',
        logo: 'https://i.pravatar.cc/150?img=4',
      },
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Psicologia',
        slug: 'atletica-psicologia',
        acronym: 'AAPSI',
        course: 'Psicologia',
        email: 'contato@atleticapsi.com',
        instagram: '@atleticapsi',
        logo: 'https://i.pravatar.cc/150?img=5',
      },
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Arquitetura',
        slug: 'atletica-arquitetura',
        acronym: 'AAARQ',
        course: 'Arquitetura e Urbanismo',
        email: 'contato@atleticaarq.com',
        instagram: '@atleticaarq',
        logo: 'https://i.pravatar.cc/150?img=6',
      },
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Educação Física',
        slug: 'atletica-educacao-fisica',
        acronym: 'AAEF',
        course: 'Educação Física',
        email: 'contato@atleticaef.com',
        instagram: '@atleticaef',
        logo: 'https://i.pravatar.cc/150?img=7',
      },
    }),
    prisma.atletica.create({
      data: {
        name: 'Atlética de Computação',
        slug: 'atletica-computacao',
        acronym: 'AACOMP',
        course: 'Ciência da Computação',
        email: 'contato@atleticacomp.com',
        instagram: '@atleticacomp',
        logo: 'https://i.pravatar.cc/150?img=8',
      },
    }),
  ]);

  console.log(`✅ ${atleticas.length} atléticas criadas`);

  // ==================== CRIAR EVENTO ====================
  const event = await prisma.event.create({
    data: {
      name: 'InterUni 2025',
      slug: 'interuni-2025',
      description: 'Jogos Universitários InterUni - Edição 2025',
      year: 2025,
      dateStart: new Date('2025-03-10'),
      dateEnd: new Date('2025-03-16'),
      status: Status.SCHEDULED,
      banner: 'https://picsum.photos/1200/400',
      logo: 'https://picsum.photos/200/200',
    },
  });

  console.log(`✅ Evento "${event.name}" criado`);

  // ==================== CRIAR TORNEIOS ====================
  const futsalMasc = await prisma.tournament.create({
    data: {
      name: 'Futsal Masculino',
      slug: 'futsal-masculino',
      description: 'Campeonato de Futsal - Categoria Masculina',
      status: Status.ONGOING,
      gender: TournamentGender.M,
      eventId: event.id,
    },
  });

  const voleiFem = await prisma.tournament.create({
    data: {
      name: 'Vôlei Feminino',
      slug: 'volei-feminino',
      description: 'Campeonato de Vôlei - Categoria Feminina',
      status: Status.ONGOING,
      gender: TournamentGender.F,
      eventId: event.id,
    },
  });

  const basqueteMisto = await prisma.tournament.create({
    data: {
      name: 'Basquete 3x3 Misto',
      slug: 'basquete-3x3-misto',
      description: 'Torneio de Basquete 3x3 - Equipes Mistas',
      status: Status.SCHEDULED,
      gender: TournamentGender.MISTO,
      eventId: event.id,
    },
  });

  console.log(`✅ ${3} torneios criados`);

  // ==================== FUTSAL MASCULINO - FASE DE GRUPOS ====================
  // Grupo A
  const futsalGrupoA = await Promise.all([
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        team1Id: atleticas[0].id, // Engenharia
        team2Id: atleticas[1].id, // Medicina
        scoreTeam1: 4,
        scoreTeam2: 2,
        round: MatchRound.GRUPOS,
        group: 'A',
        matchNumber: 1,
        status: Status.FINISHED,
        scheduledAt: new Date('2025-03-10T14:00:00'),
        startedAt: new Date('2025-03-10T14:05:00'),
        finishedAt: new Date('2025-03-10T15:20:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra 1',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        team1Id: atleticas[2].id, // Direito
        team2Id: atleticas[3].id, // Administração
        scoreTeam1: 3,
        scoreTeam2: 3,
        round: MatchRound.GRUPOS,
        group: 'A',
        matchNumber: 2,
        status: Status.FINISHED,
        scheduledAt: new Date('2025-03-10T15:30:00'),
        startedAt: new Date('2025-03-10T15:35:00'),
        finishedAt: new Date('2025-03-10T16:50:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra 1',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        team1Id: atleticas[0].id, // Engenharia
        team2Id: atleticas[3].id, // Administração
        scoreTeam1: 5,
        scoreTeam2: 1,
        round: MatchRound.GRUPOS,
        group: 'A',
        matchNumber: 3,
        status: Status.FINISHED,
        scheduledAt: new Date('2025-03-11T14:00:00'),
        startedAt: new Date('2025-03-11T14:10:00'),
        finishedAt: new Date('2025-03-11T15:15:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra 1',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        team1Id: atleticas[1].id, // Medicina
        team2Id: atleticas[2].id, // Direito
        round: MatchRound.GRUPOS,
        group: 'A',
        matchNumber: 4,
        status: Status.ONGOING,
        scheduledAt: new Date('2025-03-11T15:30:00'),
        startedAt: new Date('2025-03-11T15:32:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra 1',
      },
    }),
  ]);

  // Grupo B
  const futsalGrupoB = await Promise.all([
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        team1Id: atleticas[4].id, // Psicologia
        team2Id: atleticas[5].id, // Arquitetura
        scoreTeam1: 6,
        scoreTeam2: 3,
        round: MatchRound.GRUPOS,
        group: 'B',
        matchNumber: 5,
        status: Status.FINISHED,
        scheduledAt: new Date('2025-03-10T17:00:00'),
        startedAt: new Date('2025-03-10T17:05:00'),
        finishedAt: new Date('2025-03-10T18:20:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra 2',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        team1Id: atleticas[6].id, // Ed. Física
        team2Id: atleticas[7].id, // Computação
        scoreTeam1: 4,
        scoreTeam2: 4,
        round: MatchRound.GRUPOS,
        group: 'B',
        matchNumber: 6,
        status: Status.FINISHED,
        scheduledAt: new Date('2025-03-10T18:30:00'),
        startedAt: new Date('2025-03-10T18:35:00'),
        finishedAt: new Date('2025-03-10T19:45:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra 2',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        team1Id: atleticas[4].id, // Psicologia
        team2Id: atleticas[7].id, // Computação
        round: MatchRound.GRUPOS,
        group: 'B',
        matchNumber: 7,
        status: Status.SCHEDULED,
        scheduledAt: new Date('2025-03-12T14:00:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra 2',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        team1Id: atleticas[5].id, // Arquitetura
        team2Id: atleticas[6].id, // Ed. Física
        round: MatchRound.GRUPOS,
        group: 'B',
        matchNumber: 8,
        status: Status.SCHEDULED,
        scheduledAt: new Date('2025-03-12T15:30:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra 2',
      },
    }),
  ]);

  // Semifinais - Times ainda a definir
  const futsalSemi = await Promise.all([
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        round: MatchRound.SEMIFINAL,
        matchNumber: 9,
        status: Status.SCHEDULED,
        scheduledAt: new Date('2025-03-15T16:00:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra Central',
        notes: '1º Grupo A vs 2º Grupo B',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: futsalMasc.id,
        round: MatchRound.SEMIFINAL,
        matchNumber: 10,
        status: Status.SCHEDULED,
        scheduledAt: new Date('2025-03-15T18:00:00'),
        venue: 'Ginásio Poliesportivo',
        field: 'Quadra Central',
        notes: '1º Grupo B vs 2º Grupo A',
      },
    }),
  ]);

  console.log(`✅ ${futsalGrupoA.length + futsalGrupoB.length + futsalSemi.length} partidas de futsal criadas`);

  // ==================== VÔLEI FEMININO - OITAVAS DE FINAL ====================
  const voleiOitavas = await Promise.all([
    prisma.match.create({
      data: {
        tournamentId: voleiFem.id,
        team1Id: atleticas[0].id,
        team2Id: atleticas[7].id,
        scoreTeam1: 3,
        scoreTeam2: 0,
        round: MatchRound.OITAVAS,
        matchNumber: 1,
        status: Status.FINISHED,
        scheduledAt: new Date('2025-03-11T10:00:00'),
        startedAt: new Date('2025-03-11T10:05:00'),
        finishedAt: new Date('2025-03-11T11:20:00'),
        venue: 'Ginásio de Vôlei',
        field: 'Quadra A',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: voleiFem.id,
        team1Id: atleticas[1].id,
        team2Id: atleticas[6].id,
        scoreTeam1: 2,
        scoreTeam2: 3,
        round: MatchRound.OITAVAS,
        matchNumber: 2,
        status: Status.FINISHED,
        scheduledAt: new Date('2025-03-11T11:30:00'),
        startedAt: new Date('2025-03-11T11:35:00'),
        finishedAt: new Date('2025-03-11T13:10:00'),
        venue: 'Ginásio de Vôlei',
        field: 'Quadra A',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: voleiFem.id,
        team1Id: atleticas[2].id,
        team2Id: atleticas[5].id,
        scoreTeam1: 3,
        scoreTeam2: 1,
        round: MatchRound.OITAVAS,
        matchNumber: 3,
        status: Status.FINISHED,
        scheduledAt: new Date('2025-03-11T14:00:00'),
        startedAt: new Date('2025-03-11T14:08:00'),
        finishedAt: new Date('2025-03-11T15:35:00'),
        venue: 'Ginásio de Vôlei',
        field: 'Quadra B',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: voleiFem.id,
        team1Id: atleticas[3].id,
        team2Id: atleticas[4].id,
        round: MatchRound.OITAVAS,
        matchNumber: 4,
        status: Status.ONGOING,
        scheduledAt: new Date('2025-03-11T16:00:00'),
        startedAt: new Date('2025-03-11T16:05:00'),
        venue: 'Ginásio de Vôlei',
        field: 'Quadra B',
      },
    }),
  ]);

  // Quartas - Vencedores das oitavas
  const voleiQuartas = await Promise.all([
    prisma.match.create({
      data: {
        tournamentId: voleiFem.id,
        team1Id: atleticas[0].id, // Vencedor da oitava 1
        team2Id: atleticas[6].id, // Vencedor da oitava 2
        round: MatchRound.QUARTAS,
        matchNumber: 5,
        status: Status.SCHEDULED,
        scheduledAt: new Date('2025-03-13T16:00:00'),
        venue: 'Ginásio de Vôlei',
        field: 'Quadra Central',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: voleiFem.id,
        team1Id: atleticas[2].id, // Vencedor da oitava 3
        round: MatchRound.QUARTAS,
        matchNumber: 6,
        status: Status.SCHEDULED,
        scheduledAt: new Date('2025-03-13T18:00:00'),
        venue: 'Ginásio de Vôlei',
        field: 'Quadra Central',
        notes: 'Aguardando vencedor da oitava 4',
      },
    }),
  ]);

  console.log(`✅ ${voleiOitavas.length + voleiQuartas.length} partidas de vôlei criadas`);

  // ==================== BASQUETE - TABELA FUTURA ====================
  const basquetePartidas = await Promise.all([
    prisma.match.create({
      data: {
        tournamentId: basqueteMisto.id,
        round: MatchRound.GRUPOS,
        group: 'A',
        matchNumber: 1,
        status: Status.DRAFT,
        scheduledAt: new Date('2025-03-14T09:00:00'),
        venue: 'Quadra de Basquete',
        notes: 'Times ainda não definidos',
      },
    }),
    prisma.match.create({
      data: {
        tournamentId: basqueteMisto.id,
        round: MatchRound.GRUPOS,
        group: 'A',
        matchNumber: 2,
        status: Status.DRAFT,
        scheduledAt: new Date('2025-03-14T10:30:00'),
        venue: 'Quadra de Basquete',
        notes: 'Times ainda não definidos',
      },
    }),
  ]);

  console.log(`✅ ${basquetePartidas.length} partidas de basquete criadas`);

  // ==================== RESULTADOS DE TORNEIO ====================
  const tournamentResults = await Promise.all([
    // Futsal - Parcial (apenas times que já jogaram)
    prisma.tournamentResult.create({
      data: {
        tournamentId: futsalMasc.id,
        atleticaId: atleticas[0].id, // Engenharia
        position: 1,
        points: 6,
        wins: 2,
        draws: 0,
        losses: 0,
      },
    }),
    prisma.tournamentResult.create({
      data: {
        tournamentId: futsalMasc.id,
        atleticaId: atleticas[4].id, // Psicologia
        position: 2,
        points: 3,
        wins: 1,
        draws: 0,
        losses: 0,
      },
    }),
    prisma.tournamentResult.create({
      data: {
        tournamentId: futsalMasc.id,
        atleticaId: atleticas[2].id, // Direito
        position: 3,
        points: 1,
        wins: 0,
        draws: 1,
        losses: 0,
      },
    }),
    // Vôlei - Parcial
    prisma.tournamentResult.create({
      data: {
        tournamentId: voleiFem.id,
        atleticaId: atleticas[0].id, // Engenharia
        position: 1,
        points: 3,
        wins: 1,
        draws: 0,
        losses: 0,
      },
    }),
    prisma.tournamentResult.create({
      data: {
        tournamentId: voleiFem.id,
        atleticaId: atleticas[6].id, // Ed. Física
        position: 2,
        points: 3,
        wins: 1,
        draws: 0,
        losses: 0,
      },
    }),
    prisma.tournamentResult.create({
      data: {
        tournamentId: voleiFem.id,
        atleticaId: atleticas[2].id, // Direito
        position: 3,
        points: 3,
        wins: 1,
        draws: 0,
        losses: 0,
      },
    }),
  ]);

  console.log(`✅ ${tournamentResults.length} resultados de torneio criados`);

  // ==================== RESULTADOS GERAIS DO EVENTO ====================
  const eventResults = await Promise.all([
    prisma.eventResult.create({
      data: {
        eventId: event.id,
        atleticaId: atleticas[0].id, // Engenharia
        position: 1,
        points: 95,
        goldMedals: 2,
        silverMedals: 1,
        bronzeMedals: 0,
      },
    }),
    prisma.eventResult.create({
      data: {
        eventId: event.id,
        atleticaId: atleticas[4].id, // Psicologia
        position: 2,
        points: 87,
        goldMedals: 1,
        silverMedals: 2,
        bronzeMedals: 1,
      },
    }),
    prisma.eventResult.create({
      data: {
        eventId: event.id,
        atleticaId: atleticas[6].id, // Ed. Física
        position: 3,
        points: 76,
        goldMedals: 1,
        silverMedals: 1,
        bronzeMedals: 2,
      },
    }),
    prisma.eventResult.create({
      data: {
        eventId: event.id,
        atleticaId: atleticas[2].id, // Direito
        position: 4,
        points: 68,
        goldMedals: 0,
        silverMedals: 2,
        bronzeMedals: 2,
      },
    }),
  ]);

  console.log(`✅ ${eventResults.length} resultados gerais do evento criados`);

  // ==================== RESUMO ====================
  console.log('\n🎉 Seed concluído com sucesso!\n');
  console.log('📊 Resumo:');
  console.log(`   - ${atleticas.length} atléticas`);
  console.log(`   - 1 evento`);
  console.log(`   - 3 torneios`);
  console.log(`   - ${futsalGrupoA.length + futsalGrupoB.length + futsalSemi.length + voleiOitavas.length + voleiQuartas.length + basquetePartidas.length} partidas`);
  console.log(`   - ${tournamentResults.length} resultados de torneio`);
  console.log(`   - ${eventResults.length} resultados gerais\n`);
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });