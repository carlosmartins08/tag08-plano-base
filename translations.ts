import { Language, TranslationSchema } from './types';

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nicheHeadlines: {
      "real-estate": "Domine o mercado imobiliário.",
      health: "Autoridade máxima em saúde.",
      tech: "Escalabilidade digital de elite.",
      expert: "Sua autoridade merece uma vitrine de elite.",
      generic: "Venda mais. Sem achismos."
    },
    hero: {
      badge: "Plano Base Studio",
      title: "Venda mais.",
      titleAccent: "Apareça melhor.",
      description: "Transformamos empresas estagnadas em marcas dominantes através de gestão estratégica de marketing e design de elite. O fim da tentativa e erro.",
      cta: "Agendar Diagnóstico",
      limited: "Vagas Limitadas",
      welcomeBack: "Bem-vindo de volta",
      sourceMeta: "Domine o Social.",
      sourceGoogle: "Apareça no Topo.",
      sourceLinkedin: "Conquiste o B2B.",
      heroAlt: "Equipe de consultoria estratégica da TAG08 planejando o crescimento de uma marca premium",
      headlines: {
        data: "Decisões baseadas em lucro real.",
        vision: "O futuro da sua marca, hoje.",
        default: "Venda mais. Apareça melhor."
      }
    },
    navbar: {
      diagnosis: "Diagnóstico",
      free: "Gratuito",
      menu: {
        problem: "Problema",
        solution: "Solução",
        plan: "Pilares",
        cycle: "Ciclo",
        videos: "Vídeos",
        team: "Equipe",
        testimonials: "Depoimentos",
        faq: "FAQ"
      }
    },
    valueProposition: {
      badge: "A nossa proposta",
      title: "Somos o braço direito",
      titleAccent: "do seu negócio.",
      subtitle: "O Plano Base TAG08 foi desenhado para empresas que já validaram seu produto e agora precisam de uma estrutura profissional para escalar sem a complexidade de gerenciar múltiplos freelancers.",
      features: {
        focus: {
          title: "Foco no negócio",
          desc: "Você foca em vender e entregar; nós cuidamos da atração e da autoridade digital."
        },
        data: {
          title: "Dados e análise",
          desc: "Relatórios mensais objetivos mostram o que gera lucro e o que precisa mudar."
        },
        scale: {
          title: "Escalabilidade",
          desc: "Ações contínuas constroem valor de marca e autoridade no longo prazo."
        }
      }
    },
    problem: {
      label: "Análise de Maturidade Digital",
      title: "Cansado da falta de estrutura e da tentativa e erro?",
      description: "O custo da inércia e do marketing amador é o imposto mais caro que sua empresa paga. Se você já tentou freelancers soltos e redes sociais sem plano, sabe que o volume vazio não constrói patrimônio digital.",
      items: [
        "Inconsistência crônica na comunicação",
        "Tráfego pago sem funil de conversão",
        "Dependência de soluções superficiais",
        "Sua imagem não representa seu negócio"
      ],
      cards: {
        posts: "Falta de Método",
        leads: "Leads de Baixa Qualidade",
        money: "Dreno de Recursos",
        brand: "Autoridade Estagnada"
      }
    },
    pillars: {
      badge: "Arquitetura da entrega",
      title: "Construção de Ativos Digitais",
      subtitle: "Construímos o patrimônio digital que sua empresa precisa para dominar o nicho de forma sustentável.",
      items: {
        strategy: {
          title: "Direção Estratégica",
          desc: "Definição de canais, personas e linha editorial focada em ROI real e previsibilidade."
        },
        content: {
          title: "Produção de Elite",
          desc: "Criação de criativos premium que convertem atenção em autoridade e desejo de compra."
        },
        ads: {
          title: "Alavancagem de Tráfego",
          desc: "Gestão profissional de campanhas em Meta e Google para maximizar o lucro, não só cliques."
        },
        analysis: {
          title: "Dashboard de Performance",
          desc: "Acompanhamento em tempo real e reuniões mensais de alinhamento com especialistas seniores."
        }
      }
    },
    faq: {
      badge: "Knowledge Base",
      title: "Perguntas",
      titleAccent: "Frequentes.",
      subtitle: "Transparência radical é um dos nossos pilares. Entenda os detalhes antes de dar o próximo passo.",
      supportTitle: "Ainda com dúvida?",
      supportBody: "Nossa equipe de especialistas está disponível no WhatsApp para responder questões específicas do seu nicho.",
      supportCta: "Falar com Consultor",
      items: [
        {
          question: "O Plano Base é indicado para qualquer tipo de empresa?",
          answer: "Não. O Plano Base é exclusivo para empresas que buscam consistência estratégica e já validaram seu produto/serviço. Não atendemos quem busca 'só um post' ou quem não está disposto a seguir um plano estruturado."
        },
        {
          question: "Vocês garantem retorno imediato ou viralização?",
          answer: "Não trabalhamos com fórmulas mágicas ou busca por viralização vazia. Oferecemos um sistema de crescimento sólido e previsível. Resultados reais surgem da disciplina e do respeito ao processo."
        },
        {
          question: "Quem toma as decisões criativas?",
          answer: "A TAG08 atua como sua sócia estratégica de marketing. Valorizamos sua escuta, mas decisões técnicas são baseadas em dados e heurísticas de conversão. Buscamos parceiros, não apenas clientes."
        },
        {
          question: "Esse plano é apenas gestão de redes sociais?",
          answer: "Não. É uma infraestrutura de inteligência. Além das redes, ele integra diagnóstico, tráfego e análise de dados para transformar sua presença digital em um ativo de faturamento."
        },
        {
          question: "Como funciona a dinâmica de ajustes e retrabalho?",
          answer: "Trabalhamos com um fluxo organizado de validação. O cliente ideal participa ativamente nas definições estratégicas iniciais, o que garante precisão e elimina o retrabalho desnecessário."
        },
        {
          question: "Existe contrato de fidelidade?",
          answer: "Não possuímos fidelidade forçada. Nossa retenção é baseada em performance e clareza. Se você vê marketing como um custo e não como investimento ativo, provavelmente não teremos o fit necessário."
        }
      ]
    },
    cta: {
      title: "Sua marca pronta para o topo?",
      desc: "A comunicação é o caminho entre onde sua marca está e onde ela deseja chegar. Clique no botão abaixo para agendar um diagnóstico gratuito.",
      button: "Agendar Diagnóstico via WhatsApp",
      highValueTitle: "Leve sua operação ao topo.",
      highValueButton: "Falar com um Sócio Sênior",
      disclaimer: "* Ao iniciar o contato, você autoriza a TAG08 a tratar seus dados para fins de diagnóstico comercial, conforme a LGPD e nossa política de privacidade.",
      urgency: "Vagas limitadas para novos parceiros este mês"
    },
    contactRouting: {
      badge: "Roteamento direto",
      title: "Escolha o canal",
      titleAccent: "certo.",
      subtitle: "Brasil e Internacional / Español seguem rotas diferentes. Isso evita ruído e leva você ao time que atende o seu caso.",
      helper: "Se você estiver no Brasil, use o canal nacional. Se estiver fora do país ou precisar de atendimento em espanhol, use o canal internacional.",
      recommended: "Recomendado",
      disclaimer: "* Ao iniciar o contato, você autoriza a TAG08 a tratar seus dados para fins de diagnóstico comercial, conforme a LGPD e nossa política de privacidade.",
      routes: {
        br: {
          label: "Brasil",
          summary: "Atendimento nacional via WhatsApp para clientes no Brasil.",
          button: "Abrir WhatsApp Brasil",
          message: "Olá, quero atendimento para o Brasil."
        },
        intl: {
          label: "Internacional / Español",
          summary: "Atendimento via WhatsApp para clientes internacionais e em espanhol.",
          button: "Abrir WhatsApp Internacional",
          message: "Hola, necesito atención internacional en español."
        }
      }
    },
    cookie: {
      title: "Privacidade & Dados",
      desc: "Utilizamos cookies para otimizar sua experiência e analisar nosso tráfego.",
      accept: "Aceitar",
      policy: "Política de Privacidade",
      configure: "Configurar",
      acceptAll: "Aceitar todos",
      customizeTitle: "Personalizar cookies",
      customizeSubtitle: "Sua escolha impacta como podemos melhorar nosso serviço para você.",
      necessaryLabel: "Essenciais",
      necessaryDesc: "Obrigatórios para o site funcionar.",
      analyticalLabel: "Analíticos",
      analyticalDesc: "Ajuda a entender nosso tráfego.",
      marketingLabel: "Marketing",
      marketingDesc: "Anúncios mais relevantes para você.",
      back: "Voltar",
      savePreferences: "Salvar preferências"
    },
    privacy: {
      title: "Política de Privacidade",
      close: "Fechar",
      intro: "A TAG08 Studio respeita sua privacidade e se compromete a proteger seus dados pessoais.",
      sections: {
        data: {
          title: "Coleta de Dados",
          text: "Coletamos informações básicas de contato (nome, e-mail, telefone) apenas quando você inicia voluntariamente uma consultoria ou contato via WhatsApp."
        },
        cookies: {
          title: "Uso de Cookies",
          text: "Utilizamos cookies técnicos para garantir o funcionamento do site e cookies analíticos (Google Analytics) para entender como melhorar nossa entrega de conteúdo."
        },
        rights: {
          title: "Seus Direitos",
          text: "Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento, conforme previsto na LGPD."
        },
        security: {
          title: "Segurança",
          text: "Implementamos protocolos de criptografia e acesso restrito para garantir que suas informações estratégicas nunca sejam compartilhadas com terceiros sem autorização."
        }
      }
    },
    cookiePolicy: {
      title: "Política de Cookies",
      intro: "Esta política explica como a TAG08 utiliza cookies para melhorar sua navegação e análise de performance.",
      sections: {
        necessary: {
          title: "Cookies Necessários",
          text: "Essenciais para o funcionamento básico do site, como navegação em páginas e acesso a áreas seguras. O site não pode funcionar corretamente sem eles."
        },
        analytical: {
          title: "Cookies de Desempenho",
          text: "Ajudam-nos a entender como os visitantes interagem com o site, coletando e reportando informações de forma anônima via Google Analytics."
        },
        marketing: {
          title: "Cookies de Marketing",
          text: "Utilizados para rastrear visitantes em sites. A intenção é exibir anúncios relevantes e envolventes para o usuário individual."
        },
        management: {
          title: "Gestão de Preferências",
          text: "Você pode gerenciar ou desativar cookies através das configurações do seu navegador a qualquer momento. Note que a desativação pode afetar sua experiência no site."
        }
      }
    },
    monthlyCycle: {
      title: "Ciclo de Execução Recorrente",
      subtitle: "Marketing não é um evento, é um processo contínuo de inteligência.",
      steps: {
        step1: {
          title: "Semana 1: Alinhamento",
          desc: "Reunião de kickoff mensal para definir os temas e objetivos estratégicos."
        },
        step2: {
          title: "Semana 2: Produção",
          desc: "Desenvolvimento de artes, legendas e configuração técnica das campanhas."
        },
        step3: {
          title: "Crescimento",
          desc: "Acompanhamento diário e otimização em tempo real baseada em dados reais."
        },
        step4: {
          title: "Escala",
          desc: "Análise de KPIs e expansão agressiva de resultados e autoridade."
        }
      },
      footerText: "Repetimos o sucesso todos os meses"
    },
    testimonials: {
      title: "Reconhecimento de Elite",
      subtitle: "O que nossos parceiros dizem sobre a experiência TAG08 no Google.",
      googleRating: "5.0",
      reviewCount: "mais de 40 avaliações",
      reviewCountLabel: "avaliações",
      sourceLabel: "Google Meu Negócio",
      viewAll: "Ver todas no Google",
      items: [
        {
          name: "Ricardo Almeida",
          role: "CEO, TechFlux",
          content: "A TAG08 transformou nossa presença digital. O Plano Base nos deu a constância que faltava e o ROI foi visível já no segundo mês.",
          date: "há 2 meses"
        },
        {
          name: "Fernanda Costa",
          role: "Dir. de Marketing, Lumina",
          content: "Design de altíssimo nível e estratégia real. Não é apenas postagem, é construção de marca. Recomendo para quem busca o topo.",
          date: "há 1 mês"
        },
        {
          name: "Bruno Mantovani",
          role: "Sócio, Nexus Invest",
          content: "O profissionalismo da equipe é impressionante. O ciclo mensal de entrega é muito organizado e nos dá total clareza do crescimento.",
          date: "há 3 semanas"
        }
      ]
    },
    videoGallery: {
      badge: "Prova pública",
      title: "O canal TAG08 em",
      titleAccent: "vitrine viva.",
      subtitle: "Uma seleção sempre atualizada dos vídeos mais recentes. Aqui a entrega aparece em público: ritmo, consistência e volume real de produção.",
      updated: "Atualizado automaticamente",
      featured: "Vídeo em destaque",
      latest: "Últimos vídeos",
      openChannel: "Ver canal",
      watch: "Assistir",
      loading: "Carregando os últimos vídeos...",
      error: "Não foi possível carregar os vídeos agora. Abra o canal para ver a biblioteca completa."
    },
    teamShowcase: {
      badge: "Núcleo sênior",
      title: "O núcleo por trás",
      titleAccent: "da TAG08.",
      subtitle: "Carlos Martins criou a TAG08. Ignacio e Pedro entram para sustentar estratégia, operação e tecnologia sem excesso de ruído.",
      featuredLabel: "Liderança ativa",
      openProfile: "Abrir perfil",
      items: [
        {
          name: "Carlos Martins",
          role: "Fundador e direção",
          summary: "Criou a TAG08 e conduz a direção estratégica da operação.",
          focus: "Fundador",
          tags: [
            "Fundação",
            "Direção",
            "Clareza"
          ],
          linkedinUrl: "https://www.linkedin.com/in/carlosmartins08/"
        },
        {
          name: "Ignacio Quiroz",
          role: "Estratégia e comunicação",
          summary: "Define posicionamento e narrativa para transformar intenção em direção comercial.",
          focus: "Estratégia",
          tags: [
            "Posicionamento",
            "Narrativa",
            "Oferta"
          ],
          linkedinUrl: "https://www.linkedin.com/in/ignacio-quiroz-b1568a52/"
        },
        {
          name: "Pedro V. Félix",
          role: "Dados e tecnologia",
          summary: "Organiza dados, automação e suporte técnico para decisões mais seguras.",
          focus: "Tecnologia",
          tags: [
            "Dados",
            "Automação",
            "Integração"
          ],
          linkedinUrl: "https://www.linkedin.com/in/pedrovsfelix/"
        }
      ]
    },
    strategicBenefits: {
      badge: "La norme TAG08",
      title: "La norme TAG08",
      subtitle: "Diferenciais que nos colocam no topo da cadeia do marketing estratégico e inteligente.",
      stats: {
        transparency: "Transparence",
        roi: "ROI moyen"
      },
      items: [
        {
          title: "Inteligência Estratégica",
          desc: "Não apenas executamos; pensamos o seu negócio com foco em ativos digitais recorrentes."
        },
        {
          title: "ROI cibl?",
          desc: "Construímos uma autoridade que se valoriza com o tempo, gerando desejo de compra real."
        },
        {
          title: "?quipe senior",
          desc: "Acesso direto a consultores especialistas. Sem estagiários na linha de frente da sua marca."
        },
        {
          title: "Agilit?",
          desc: "Troque o caos pela clareza de um fluxo de trabalho que privilegia a sua produtividade."
        }
      ]
    },
    calculator: {
      badge: "ROI Calculator",
      title: "Quanto você está",
      titleAccent: "deixando na mesa?",
      description: "O custo da inércia é o imposto mais caro que sua empresa paga. Calcule agora o potencial de crescimento negligenciado.",
      revenueLabel: "Faturamento Mensal",
      growthLabel: "Meta de Crescimento",
      lossLabel: "Oportunidade Perdida Anual",
      monthlyLossLabel: "Crescimento Mensal",
      newCeilingLabel: "Novo Teto Mensal",
      cta: "Capturar Oportunidade",
      disclaimer: "Análise baseada em benchmarking sênior"
    },
    investment: {
      badge: "Safety First",
      title: "Investimento",
      titleAccent: "Estratégico.",
      subtitle: "Clareza total sobre o valor da sua transformação. Sem letras miúdas, apenas performance de elite.",
      cardTitle: "Segurança de Studio",
      fidelityTitle: "Zero Fidelidade",
      fidelityTag: "ELITE",
      fidelityDesc: "Foque nos resultados. Não prendemos nossos parceiros com contratos longos; nossa retenção é baseada em performance real.",
      cancelTitle: "Cancelamento Flexível",
      cancelDesc: "Precisa ajustar o rumo? Basta um aviso prévio de 30 dias. Simplicidade e ética em todas as pontas da nossa operação.",
      offerTitle: "Sua marca,",
      offerTitleAccent: "nosso foco.",
      offerDesc: "Operações de alto nível exigem personalização. O valor do Plano Base é adaptado à sua necessidade de escala.",
      offerCta: "Solicitar Proposta"
    },
    responsibilities: {
      badge: "The Partnership",
      title: "Sincronia",
      titleAccent: "Estratégica.",
      subtitle: "Marketing de elite é uma via de mão dupla. Para alcançarmos o topo, precisamos que sua equipe esteja em total sincronia conosco:",
      items: [
        "Sincronia constante entre marketing e comercial.",
        "Direção e clareza no compartilhamento da visão.",
        "Participação ativa na reunião mensal de alinhamento.",
        "Abertura total para processos e novas estratégias."
      ]
    },
    footer: {
      badge: "Consultoria de Elite",
      title: "Sua empresa pronta para o",
      titleAccent: "próximo nível de maturidade.",
      description: "A TAG08 une estratégia de negócios, engenharia de processos e tecnologia para transformar o caos operacional em máquinas de crescimento.",
      ctaDiagnosis: "AGENDAR DIAGNÓSTICO",
      ctaDirection: "FALAR COM A DIREÇÃO",
      headquarters: "Sede",
      centralSupport: "Central de atendimento",
      about: "Consultoria especializada em alavancagem de negócios. Substituímos o 'achismo' por dados e o caos por processos validados.",
      ecosystem: "Ecossistema TAG08",
      aboutTag08: "Sobre a TAG08",
      blog: "Blog Estratégico",
      sebraetec: "Sebraetec",
      institutional: "Institucional",
      social: "Redes Sociais",
      socialDesc: "Acompanhe os bastidores das consultorias e insights diários de gestão.",
      rights: "TAG08 Estratégia Digital",
      allRights: "Todos os direitos reservados.",
      privacy: "Privacidade",
      cookies: "Política de Cookies",
      preferences: "Preferências de Privacidade"
    },
    growthRoadmap: {
      title: "O Caminho para o",
      titleAccent: "Próximo Nível",
      subtitle: "Não é sobre um serviço mensal, é sobre uma jornada de escala previsível e lucrativa.",
      steps: {
        step1: {
          stage: "Fase 01",
          title: "Consolidação",
          desc: "Ajuste de fundação, branding de elite e estrutura de tráfego inicial."
        },
        step2: {
          stage: "Fase 02",
          title: "Escala",
          desc: "Expansão de budgets, otimização de funis e domínio de audiência."
        },
        step3: {
          stage: "Fase 03",
          title: "Aceleração",
          desc: "Lançamentos e escala vertical para atingir o teto do mercado."
        },
        step4: {
          stage: "Fase 04",
          title: "Domínio",
          desc: "Autoridade inquestionável e liderança absoluta no seu nicho."
        }
      }
    },
    strategyNotes: {
      hero: "Engenharia visual focada em reduzir esforço cognitivo do lead ideal.",
      metrics: "Otimização baseada em heurísticas de usabilidade e conversão real.",
      roadmap: "Filtro de LTV 360: Atraindo quem investe e repelindo quem gasta.",
      roi: "Identificação de falhas estruturais causadas por marketing amador.",
      design: "Grid de elite: A estética como primeira barreira de autoridade.",
      blueprint: "Strategic Transparency: Mostrando as camadas invisíveis do método."
    }
  },
  en: {
    nicheHeadlines: {
      "real-estate": "Highlight your properties.",
      health: "Strengthen your clinic.",
      tech: "Scale your Startup.",
      expert: "Your authority deserves an elite showcase.",
      generic: "Sell more."
    },
    hero: {
      badge: "Studio Base Plan",
      title: "Sell more.",
      titleAccent: "Look better.",
      description: "We transform stagnant companies into dominant brands through strategic marketing management and elite design.",
      cta: "Schedule Diagnosis",
      limited: "Limited Spots",
      welcomeBack: "Welcome back",
      sourceMeta: "Master Social Media.",
      sourceGoogle: "Be at the Top.",
      sourceLinkedin: "Conquer B2B.",
      heroAlt: "TAG08 strategic consulting team planning the growth of a premium brand",
      headlines: {
        data: "Decisions based on real profit.",
        vision: "The future of your brand, today.",
        default: "Sell more. Look better."
      }
    },
    navbar: {
      diagnosis: "Diagnosis",
      free: "Free",
      menu: {
        problem: "Problem",
        solution: "Solution",
        plan: "Pillars",
        cycle: "Cycle",
        videos: "Videos",
        team: "Team",
        testimonials: "Testimonials",
        faq: "FAQ"
      }
    },
    valueProposition: {
      badge: "Our proposal",
      title: "We are the right hand",
      titleAccent: "of your business.",
      subtitle: "The TAG08 Base Plan was designed for companies that have already validated their product and now need a professional structure to scale without the complexity of managing multiple freelancers.",
      features: {
        focus: {
          title: "Business focus",
          desc: "You focus on selling and delivery; we handle attraction and digital authority."
        },
        data: {
          title: "Data and analysis",
          desc: "Clear monthly reports show what creates profit and what needs to change."
        },
        scale: {
          title: "Scalability",
          desc: "Continuous actions build brand value and authority over time."
        }
      }
    },
    problem: {
      label: "The Current Scenario",
      title: "Is your company stuck in \"almost\"?",
      description: "Amateur marketing is the biggest cash drain on your business. Without studio management, you're just burning resources without building digital equity.",
      items: [
        "Lack of consistency in communication",
        "Paid media without conversion strategy",
        "Uncertainty about return on investment",
        "Partner operational overload"
      ],
      cards: {
        posts: "Irregular Posts",
        leads: "Unqualified Leads",
        money: "Wasted Money",
        brand: "Invisible Brand"
      }
    },
    pillars: {
      badge: "Delivery architecture",
      title: "Building Digital Assets",
      subtitle: "We build the digital equity your company needs to dominate the niche sustainably.",
      items: {
        strategy: {
          title: "Strategic Direction",
          desc: "Channel, persona and editorial-line definition focused on real ROI and predictability."
        },
        content: {
          title: "Elite Production",
          desc: "Premium creatives that convert attention into authority and buying intent."
        },
        ads: {
          title: "Traffic Leverage",
          desc: "Professional Meta and Google campaign management to maximize profit, not just clicks."
        },
        analysis: {
          title: "Performance Dashboard",
          desc: "Real-time tracking and monthly alignment with senior specialists."
        }
      }
    },
    faq: {
      badge: "Knowledge Base",
      title: "Questions",
      titleAccent: "Frequently Asked.",
      subtitle: "Radical transparency is one of our pillars. Understand the details before taking the next step.",
      supportTitle: "Still have questions?",
      supportBody: "Our consulting team is available via WhatsApp to answer niche-specific questions.",
      supportCta: "Talk to a Consultant",
      items: [
        {
          question: "Is the Base Plan suitable for any type of company?",
          answer: "The Base Plan is indicated for companies that have already validated their business model and are in a digital consolidation phase but do not yet have an internal marketing team. It is not for early-stage startups or one-off posts."
        },
        {
          question: "Is this plan just social media management?",
          answer: "No. The Base Plan goes beyond social media management. It includes strategic diagnosis, content planning, production, publishing, and monthly analysis for a continuous growth system."
        },
        {
          question: "On which channels is the content published?",
          answer: "Content is published on Instagram and Facebook, as defined in the monthly planning. Other channels can be evaluated in specific proposals or complementary plans."
        },
        {
          question: "Who creates the themes and ideas for the content?",
          answer: "TAG08 proposes the themes and strategic guidelines, and the client can contribute with business suggestions. Final planning is always validated together before production starts."
        },
        {
          question: "Do the videos need to be recorded by TAG08?",
          answer: "Not necessarily. Videos can be recorded by TAG08 or provided by the client, as long as they follow the planning guidelines to ensure quality and coherence."
        },
        {
          question: "How does the results tracking work?",
          answer: "Every month, we hold a follow-up meeting and deliver a report with engagement analysis, allowing us to adjust the strategic direction when necessary."
        },
        {
          question: "Is there a loyalty contract?",
          answer: "No. The Base Plan has no contractual loyalty. If the client decides to cancel, only a 30-day notice is required."
        },
        {
          question: "Can I hire extra content or services?",
          answer: "Yes. When needed, extra content or complementary services can be hired on a one-off basis without changing the Base Plan format."
        },
        {
          question: "Does the Base Plan guarantee specific results?",
          answer: "We don't work with unrealistic promises. We offer structure, method, and consistency. Results depend on market, product, and client participation."
        },
        {
          question: "What is expected from the client during the plan?",
          answer: "Clients should provide materials on time, appoint a focal point for approvals, and participate in monthly alignment meetings to ensure fluidity."
        },
        {
          question: "How soon will I see the content live?",
          answer: "After planning approval, we start production. Every month, a new cycle begins on the 15th, ensuring predictability and organization."
        },
        {
          question: "Can this plan evolve as my business grows?",
          answer: "Yes. The Base Plan was designed as an entry point for scalable solutions. As the business evolves, new strategies and services can be incorporated."
        }
      ]
    },
    cta: {
      title: "Ready for the next level?",
      desc: "Click the button below to schedule a free diagnostic meeting with our senior team.",
      button: "Schedule Now via WhatsApp",
      highValueTitle: "Take your operation to the top.",
      highValueButton: "Talk to a Senior Partner",
      disclaimer: "By clicking, you agree to the processing of your data for commercial contact purposes as per our privacy policy.",
      urgency: "Limited spots for new partners this month"
    },
    contactRouting: {
      badge: "Direct routing",
      title: "Choose the right",
      titleAccent: "channel.",
      subtitle: "Brazil and International / Spanish follow different routes. That keeps the conversation clean and sends you to the team that handles your case.",
      helper: "If you're in Brazil, use the national channel. If you're outside the country or need Spanish support, use the international channel.",
      recommended: "Recommended",
      disclaimer: "By starting the contact, you agree that TAG08 may process your data for commercial diagnosis purposes, in line with our privacy policy.",
      routes: {
        br: {
          label: "Brazil",
          summary: "Brazilian WhatsApp support for local clients.",
          button: "Open Brazil WhatsApp",
          message: "Olá, quero atendimento para o Brasil."
        },
        intl: {
          label: "International / Spanish",
          summary: "WhatsApp support for international clients and Spanish-speaking conversations.",
          button: "Open International WhatsApp",
          message: "Hola, necesito atención internacional en español."
        }
      }
    },
    cookie: {
      title: "Privacy & Data",
      desc: "We use essential, analytical and marketing cookies to improve your experience and understand our traffic.",
      accept: "Accept",
      policy: "Cookie Policy",
      configure: "Configure",
      acceptAll: "Accept all",
      customizeTitle: "Customize cookies",
      customizeSubtitle: "Your choice affects how we can improve the site for you.",
      necessaryLabel: "Essential",
      necessaryDesc: "Required for the website to work properly.",
      analyticalLabel: "Analytics",
      analyticalDesc: "Helps us understand traffic and usage behavior.",
      marketingLabel: "Marketing",
      marketingDesc: "More relevant ads based on your preferences.",
      back: "Back",
      savePreferences: "Save preferences"
    },
    privacy: {
      title: "Privacy Policy",
      close: "Close",
      intro: "TAG08 Studio respects your privacy and is committed to protecting your personal data.",
      sections: {
        data: {
          title: "Data Collection",
          text: "We collect basic contact information (name, email, phone) only when you voluntarily start a consultation or contact via WhatsApp."
        },
        cookies: {
          title: "Use of Cookies",
          text: "We use technical cookies to ensure site functionality and analytical cookies (Google Analytics) to understand how to improve our content delivery."
        },
        rights: {
          title: "Your Rights",
          text: "You have the right to access, correct, or request the deletion of your data at any time, as provided by GDPR."
        },
        security: {
          title: "Security",
          text: "We implement encryption protocols and restricted access to ensure your strategic information is never shared without authorization."
        }
      }
    },
    cookiePolicy: {
      title: "Cookie Policy",
      intro: "This policy explains how TAG08 uses cookies to improve your browsing experience and performance analysis.",
      sections: {
        necessary: {
          title: "Necessary Cookies",
          text: "Essential for the basic functioning of the site, such as page navigation and access to secure areas. The site cannot function properly without them."
        },
        analytical: {
          title: "Performance Cookies",
          text: "Help us understand how visitors interact with the site by collecting and reporting information anonymously via Google Analytics."
        },
        marketing: {
          title: "Marketing Cookies",
          text: "Used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user."
        },
        management: {
          title: "Preference Management",
          text: "You can manage or disable cookies through your browser settings at any time. Note that disabling them may affect your experience on the site."
        }
      }
    },
    monthlyCycle: {
      title: "Recurring Execution Cycle",
      subtitle: "Marketing is not an event, it's a continuous process.",
      steps: {
        step1: {
          title: "Week 1: Alignment",
          desc: "Monthly kickoff meeting to define themes and strategic objectives."
        },
        step2: {
          title: "Week 2: Production",
          desc: "Creation of visuals, captions, and technical campaign setup."
        },
        step3: {
          title: "Growth",
          desc: "Daily monitoring and real-time optimization."
        },
        step4: {
          title: "Scaling",
          desc: "KPI analysis and aggressive result expansion."
        }
      },
      footerText: "We repeat the success every month"
    },
    testimonials: {
      title: "Elite Recognition",
      subtitle: "What our partners say about the TAG08 experience on Google.",
      googleRating: "5.0",
      reviewCount: "over 40 reviews",
      reviewCountLabel: "reviews",
      sourceLabel: "Google Business Profile",
      viewAll: "View all on Google",
      items: [
        {
          name: "Ricardo Almeida",
          role: "CEO, TechFlux",
          content: "TAG08 transformed our digital presence. The Base Plan gave us the consistency we lacked, and the ROI was visible by the second month.",
          date: "2 months ago"
        },
        {
          name: "Fernanda Costa",
          role: "Marketing Dir., Lumina",
          content: "Top-tier design and real strategy. It's not just posting; it's brand building. I recommend it for those seeking the top.",
          date: "1 month ago"
        },
        {
          name: "Bruno Mantovani",
          role: "Partner, Nexus Invest",
          content: "The team's professionalism is impressive. The monthly delivery cycle is very organized and gives us total clarity on growth.",
          date: "3 weeks ago"
        }
      ]
    },
    calculator: {
      badge: "ROI Calculator",
      title: "How much are you",
      titleAccent: "leaving on the table?",
      description: "The cost of inertia is the most expensive tax your company pays. Calculate the neglected growth potential now.",
      revenueLabel: "Monthly Revenue",
      growthLabel: "Growth Goal",
      lossLabel: "Annual Lost Opportunity",
      monthlyLossLabel: "Monthly Growth",
      newCeilingLabel: "New Monthly Ceiling",
      cta: "Capture Opportunity",
      disclaimer: "Analysis based on senior benchmarking"
    },
    investment: {
      badge: "Safety First",
      title: "Strategic",
      titleAccent: "Investment.",
      subtitle: "Total clarity on the value of your transformation. No fine print, just elite performance.",
      cardTitle: "Studio Safety",
      fidelityTitle: "Zero Loyalty",
      fidelityTag: "ELITE",
      fidelityDesc: "Focus on results. We don't trap our clients with long contracts; our retention is based on real performance.",
      cancelTitle: "Flexible Cancellation",
      cancelDesc: "Need to adjust course? Just a 30-day notice. Simplicity and ethics at all ends of our operation.",
      offerTitle: "Your brand,",
      offerTitleAccent: "our focus.",
      offerDesc: "High-level operations require personalization. The Base Plan value is adapted to your scale needs.",
      offerCta: "Request Proposal"
    },
    responsibilities: {
      badge: "The Partnership",
      title: "Your responsibility",
      titleAccent: "in success.",
      subtitle: "Elite marketing is a two-way street. To reach the top, we need your team to be in sync with us:",
      items: [
        "Agility in creative approvals.",
        "Sync between marketing and sales.",
        "Active participation in the monthly meeting.",
        "Constant feedback on generated leads."
      ]
    },
    videoGallery: {
      badge: "Public proof",
      title: "TAG08 channel in",
      titleAccent: "a living showcase.",
      subtitle: "A constantly updated selection of the latest videos. This is where delivery becomes visible: cadence, consistency, and real production volume.",
      updated: "Auto-updated",
      featured: "Featured video",
      latest: "Latest videos",
      openChannel: "Open channel",
      watch: "Watch",
      loading: "Loading the latest videos...",
      error: "We could not load the videos right now. Open the channel to view the full library."
    },
    teamShowcase: {
      badge: "Senior core",
      title: "The core behind",
      titleAccent: "TAG08.",
      subtitle: "Carlos Martins created TAG08. Ignacio and Pedro support strategy, operations, and technology without unnecessary noise.",
      featuredLabel: "Active leadership",
      openProfile: "Open profile",
      items: [
        {
          name: "Carlos Martins",
          role: "Founder and direction",
          summary: "Created TAG08 and leads the strategic direction of the operation.",
          focus: "Founder",
          tags: [
            "Foundation",
            "Direction",
            "Clarity"
          ],
          linkedinUrl: "https://www.linkedin.com/in/carlosmartins08/"
        },
        {
          name: "Ignacio Quiroz",
          role: "Strategy and communication",
          summary: "Shapes positioning and narrative so intent turns into a clear commercial direction.",
          focus: "Strategy",
          tags: [
            "Positioning",
            "Narrative",
            "Offer"
          ],
          linkedinUrl: "https://www.linkedin.com/in/ignacio-quiroz-b1568a52/"
        },
        {
          name: "Pedro V. Félix",
          role: "Data and technology",
          summary: "Organizes data, automation, and technical support for safer decisions.",
          focus: "Technology",
          tags: [
            "Data",
            "Automation",
            "Integration"
          ],
          linkedinUrl: "https://www.linkedin.com/in/pedrovsfelix/"
        }
      ]
    },
    strategicBenefits: {
      badge: "The TAG08 standard",
      title: "The TAG08 Studio Standard",
      subtitle: "Differentials that place us at the top of the strategic marketing chain.",
      stats: {
        transparency: "Transparency",
        roi: "Average ROI"
      },
      items: [
        {
          title: "Absolute Consistency",
          desc: "Uninterrupted and professional digital presence that builds real authority."
        },
        {
          title: "Focused ROI",
          desc: "Campaigns optimized to generate profit and scale, avoiding vanity metrics."
        },
        {
          title: "Senior Team",
          desc: "Direct access to expert consultants, without intermediaries or interns."
        },
        {
          title: "Agility",
          desc: "Fast execution and constant adaptation to digital market changes."
        }
      ]
    },
    footer: {
      badge: "Elite Consulting",
      title: "Your company ready for the",
      titleAccent: "next stage of maturity.",
      description: "TAG08 combines business strategy, process engineering and technology to turn operational chaos into growth machines.",
      ctaDiagnosis: "SCHEDULE DIAGNOSIS",
      ctaDirection: "TALK TO LEADERSHIP",
      headquarters: "Headquarters",
      centralSupport: "Central support",
      about: "Business leverage consulting. We replace guesswork with data and chaos with validated processes.",
      ecosystem: "TAG08 Ecosystem",
      aboutTag08: "About TAG08",
      blog: "Strategic Blog",
      sebraetec: "Sebraetec",
      institutional: "Institutional",
      social: "Social Media",
      socialDesc: "Follow the consulting behind the scenes and daily management insights.",
      rights: "TAG08 Digital Strategy",
      allRights: "All rights reserved.",
      privacy: "Privacy",
      cookies: "Cookie Policy",
      preferences: "Privacy preferences"
    },
    growthRoadmap: {
      title: "The Path to the",
      titleAccent: "Next Level",
      subtitle: "It's not about a monthly service, it's about a journey of predictable and profitable scale.",
      steps: {
        step1: {
          stage: "Phase 01",
          title: "Consolidation",
          desc: "Foundation adjustment, elite branding and initial traffic structure."
        },
        step2: {
          stage: "Phase 02",
          title: "Scaling",
          desc: "Budget expansion, funnel optimization and audience dominance."
        },
        step3: {
          stage: "Phase 03",
          title: "Acceleration",
          desc: "Launches and vertical scale to reach the market ceiling."
        },
        step4: {
          stage: "Phase 04",
          title: "Dominance",
          desc: "Unquestionable authority and absolute leadership in your niche."
        }
      }
    },
    strategyNotes: {
      hero: "Visual engineering focused on reducing guest effort.",
      metrics: "Optimization based on senior usability heuristics.",
      roadmap: "360 vision of LTV for maximum predictability.",
      roi: "Annual loss projection due to digital stagnation.",
      design: "Elite grid for absolute visual harmony.",
      blueprint: "Blueprint Mode: Visualizing strategic layers."
    }
  },
  es: {
    nicheHeadlines: {
      "real-estate": "Domina el mercado inmobiliario.",
      health: "Fortalezca su clínica.",
      tech: "Escalabilidad digital de ?lite.",
      expert: "Tu autoridad merece una vitrina de ?lite.",
      generic: "Venda más."
    },
    hero: {
      badge: "Plan Base Studio",
      title: "Venda más.",
      titleAccent: "Aparece mejor.",
      description: "Transformamos empresas estancadas en marcas dominantes a través de gestión estratégica de marketing y diseño de élite.",
      cta: "Agendar Diagnóstico",
      limited: "Cupos limitados",
      welcomeBack: "Bienvenido de nuevo",
      sourceMeta: "Domina las redes.",
      sourceGoogle: "Aparece en la cima.",
      sourceLinkedin: "Conquista B2B.",
      heroAlt: "Equipo de consultoría estratégica de TAG08 planificando el crecimiento de una marca premium",
      headlines: {
        data: "Decisiones basadas en beneficio real.",
        vision: "El futuro de tu marca, hoy.",
        default: "Venda más. Luzca melhor."
      }
    },
    navbar: {
      diagnosis: "Diagnóstico",
      free: "Gratis",
      menu: {
        problem: "Problema",
        solution: "Solución",
        plan: "Pilares",
        cycle: "Ciclo",
        videos: "Videos",
        team: "Equipo",
        testimonials: "Testimonios",
        faq: "FAQ"
      }
    },
    valueProposition: {
      badge: "Nuestra propuesta",
      title: "Somos el brazo derecho",
      titleAccent: "de tu negocio.",
      subtitle: "El Plan Base TAG08 fue creado para empresas que ya validaron su producto y ahora necesitan una estructura profesional para escalar sin la complejidad de gestionar varios freelancers.",
      features: {
        focus: {
          title: "Enfoque en el negocio",
          desc: "Tú te enfocas en vender y entregar; nosotros cuidamos la atracción y la autoridad digital."
        },
        data: {
          title: "Datos y análisis",
          desc: "Informes mensuales claros muestran qu? genera ganancias y qu? debe cambiar."
        },
        scale: {
          title: "Escalabilidad",
          desc: "Las acciones continuas construyen valor de marca y autoridad a largo plazo."
        }
      }
    },
    problem: {
      label: "El Escenario Actual",
      title: "¿Su empresa está estancada en el \"casi\"?",
      description: "El marketing amateur es el mayor drenaje de efectivo de su empresa. Sin una gestión de estudio, solo está quemando recursos sin construir patrimonio digital.",
      items: [
        "Falta de constancia en la comunicación",
        "Tráfico pagado sin estratégia de conversión",
        "Incertidumbre sobre el retorno de inversión",
        "Sobrecarga operativa del socio"
      ],
      cards: {
        posts: "Posteos Irregulares",
        leads: "Leads Desqualificados",
        money: "Dinero Perdido",
        brand: "Marca Invisible"
      }
    },
    pillars: {
      badge: "Arquitectura de entrega",
      title: "Los 4 Pilares de la Entrega",
      subtitle: "Construimos el patrimonio digital que tu empresa necesita para dominar el nicho de forma sostenible.",
      items: {
        strategy: {
          title: "Planeación Estratégica",
          desc: "Definição de canais, personas, linha editorial e cronograma de ações trimestrais focado em conversão."
        },
        content: {
          title: "Producción de Conteúdo",
          desc: "Creación de creativos para redes sociales y anuncios, manteniendo el estándar visual premium de su marca."
        },
        ads: {
          title: "Gestión de Tráfico Pago",
          desc: "Configuración y optimización diaria de campañas en Meta Ads y Google Ads para maximizar o ROI."
        },
        analysis: {
          title: "Dashboard de Rendimiento",
          desc: "Seguimiento en tiempo real y reuniones mensuales con especialistas senior."
        }
      }
    },
    faq: {
      badge: "Knowledge Base",
      title: "Preguntas",
      titleAccent: "Frecuentes.",
      subtitle: "La transparencia radical es uno de nuestros pilares. Entiende los detalles antes de dar el siguiente paso.",
      supportTitle: "¿Aún con dudas?",
      supportBody: "Nuestro equipo de consultores está disponible en WhatsApp para resolver consultas específicas de tu nicho.",
      supportCta: "Hablar con un Consultor",
      items: [
        {
          question: "¿El Plan Base es adecuado para cualquier tipo de empresa?",
          answer: "El Plan Base está indicado para empresas que ya validaron su modelo de negocio y están en fase de consolidación digital, pero aún no tienen equipo interno. No es para negocios iniciales o publicaciones puntuales."
        },
        {
          question: "¿Este plan es solo gestión de redes sociales?",
          answer: "No. El Plan Base va más allá. Incluye diagnóstico estratégico, planificación de contenido, producción, publicación y análisis mensual para un crecimiento digital continuo."
        },
        {
          question: "¿En qué canales se publican los contenidos?",
          answer: "Se publican en Instagram y Facebook, según lo definido en la planificación mensual. Otros canales pueden evaluarse en propuestas específicas."
        },
        {
          question: "¿Quién crea los temas e ideas de los contenidos?",
          answer: "TAG08 propone los temas y el cliente puede contribuir con sugerencias. La planificación final siempre se valida en conjunto antes de la producción."
        },
        {
          question: "¿Los vídeos deben ser grabados por TAG08?",
          answer: "No necesariamente. Pueden ser grabados por TAG08 o proporcionados por el cliente, siempre que sigan las directrices de planificación para asegurar calidad y coherencia."
        },
        {
          question: "¿Cómo funciona el seguimiento de resultados?",
          answer: "Mensualmente realizamos una reunión de seguimiento y entregamos un informe de rendimiento para ajustar la dirección estratégica si es necesario."
        },
        {
          question: "¿Existe contrato de permanencia?",
          answer: "No. El Plan Base no tiene permanencia contractual. Si el cliente decide cancelar, solo se requiere un aviso previo de 30 días."
        },
        {
          question: "¿Puedo contratar contenidos o servicios extras?",
          answer: "Sí. Cuando sea necesario, se pueden contratar contenidos o servicios extras de forma individual, sin alterar el formato del Plan Base."
        },
        {
          question: "¿El Plan Base garantiza resultados específicos?",
          answer: "No trabajamos con promesas irreales. Ofrecemos estructura, método y constancia. Los resultados dependen del mercado, producto y participación del cliente."
        },
        {
          question: "¿Qué se espera del cliente durante el plan?",
          answer: "El cliente debe entregar materiales a tiempo, asignar un punto focal para aprobaciones y participar en reuniones mensuales para asegurar la calidad."
        },
        {
          question: "¿En cuánto tiempo veré el contenido al aire?",
          answer: "Tras aprobar la planificación, iniciamos la producción. Cada mes, un nuevo ciclo comienza el día 15, asegurando previsibilidad y organización."
        },
        {
          question: "¿Puede este plan evolucionar conforme crece mi negocio?",
          answer: "Sí. El Plan Base es la puerta de entrada para soluciones escalables. A medida que el negocio evoluciona, se incorporan nuevas estrategias y servicios."
        }
      ]
    },
    cta: {
      title: "¿Listo para el siguiente nivel?",
      desc: "Haga clic en el botón de abajo para agendar una reunión de diagnóstico gratuita con nuestro equipo sénior.",
      button: "Agendar Agora por WhatsApp",
      highValueTitle: "Lleve su operación a la cima.",
      highValueButton: "Hablar con un Socio Sénior",
      disclaimer: "Al hacer clic, acepta el procesamiento de sus datos para fines de contacto comercial según nuestra política de privacidad.",
      urgency: "Cupos limitados para nuevos socios este mes"
    },
    contactRouting: {
      badge: "Enrutamiento directo",
      title: "Elige el",
      titleAccent: "canal correcto.",
      subtitle: "Brasil e Internacional / Español siguen rutas distintas. Eso evita ruido y te lleva al equipo que atiende tu caso.",
      helper: "Si estás en Brasil, usa el canal nacional. Si estás fuera del país o necesitas atención en español, usa el canal internacional.",
      recommended: "Recomendado",
      disclaimer: "Al iniciar el contacto, autorizas a TAG08 a tratar tus datos con fines de diagnóstico comercial, de acuerdo con nuestra política de privacidad.",
      routes: {
        br: {
          label: "Brasil",
          summary: "Atención nacional por WhatsApp para clientes en Brasil.",
          button: "Abrir WhatsApp Brasil",
          message: "Olá, quero atendimento para o Brasil."
        },
        intl: {
          label: "Internacional / Español",
          summary: "Atención por WhatsApp para clientes internacionales y conversaciones en español.",
          button: "Abrir WhatsApp Internacional",
          message: "Hola, necesito atención internacional en español."
        }
      }
    },
    cookie: {
      title: "Privacidad y datos",
      desc: "Utilizamos cookies para optimizar su experiencia e analizar nuestro tráfico.",
      accept: "Aceptar",
      policy: "Política de Privacidad",
      configure: "Configurar",
      acceptAll: "Aceptar todo",
      customizeTitle: "Personalizar cookies",
      customizeSubtitle: "Tu elección influye en cómo podemos mejorar el sitio para ti.",
      necessaryLabel: "Esenciales",
      necessaryDesc: "Obligatorias para que el sitio funcione.",
      analyticalLabel: "Analíticas",
      analyticalDesc: "Ayudan a entender el tráfico y el uso del sitio.",
      marketingLabel: "Marketing",
      marketingDesc: "Anuncios más relevantes según tus preferencias.",
      back: "Volver",
      savePreferences: "Guardar preferencias"
    },
    privacy: {
      title: "Política de Privacidad",
      close: "Cerrar",
      intro: "TAG08 Studio respeta su privacidad y se compromete a proteger sus datos personales.",
      sections: {
        data: {
          title: "Recopilación de Datos",
          text: "Recopilamos información básica de contacto (nombre, email, teléfono) solo cuando inicia voluntariamente una consultoría o contacto vía WhatsApp."
        },
        cookies: {
          title: "Uso de Cookies",
          text: "Utilizamos cookies técnicas para garantizar el funcionamiento del sitio y cookies analíticas (Google Analytics) para entender cómo mejorar nuestra entrega de contenido."
        },
        rights: {
          title: "Sus Derechos",
          text: "Tiene derecho a acceder, corregir o solicitar la eliminación de sus datos en cualquier momento, según lo previsto en las leyes de protección de datos."
        },
        security: {
          title: "Seguridad",
          text: "Implementamos protocolos de cifrado y acceso restringido para garantizar que su información estratégica nunca se comparta con terceros sin autorización."
        }
      }
    },
    cookiePolicy: {
      title: "Política de Cookies",
      intro: "Esta política explica cómo TAG08 utiliza cookies para mejorar su experiencia de navegación y análisis de rendimiento.",
      sections: {
        necessary: {
          title: "Cookies Necesarias",
          text: "Esenciales para el funcionamiento básico del sitio, como la navegación por páginas y el acceso a áreas seguras. El sitio no puede funcionar correctamente sin ellos."
        },
        analytical: {
          title: "Cookies de Rendimiento",
          text: "Nos ayudan a entender cómo los visitantes interactúan con el sitio mediante la recopilación y el reporte de información de forma anônima a través de Google Analytics."
        },
        marketing: {
          title: "Cookies de Marketing",
          text: "Se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios que sean relevantes y atractivos para el usuario individual."
        },
        management: {
          title: "Gestão de Preferências",
          text: "Puede gestionar o desactivar as cookies a través de la configuración de su navegador en cualquier momento. Tenga en cuenta que desactivarlas puede afectar a su experiencia en el sitio."
        }
      }
    },
    monthlyCycle: {
      title: "Ciclo de Ejecución Recurrente",
      subtitle: "El marketing no es un evento, es un proceso continuo.",
      steps: {
        step1: {
          title: "Semana 1: Alineación",
          desc: "Reunión de inicio mensual para definir temas y objetivos estratégicos."
        },
        step2: {
          title: "Semana 2: Producción",
          desc: "Desarrollo de artes, subtítulos y configuración técnica de campañas."
        },
        step3: {
          title: "Semana 3: Lanzamiento",
          desc: "Activación de acciones e inicio de recolección de datos de rendimiento en tiempo real."
        },
        step4: {
          title: "Semana 4: Análisis",
          desc: "Cierre del informe con insights y sugerencias de mejora para el próximo ciclo."
        }
      },
      footerText: "Repetimos el éxito todos los meses"
    },
    testimonials: {
      title: "Reconocimiento de Élite",
      subtitle: "Lo que dicen nuestros socios sobre la experiencia TAG08 en Google.",
      googleRating: "5.0",
      reviewCount: "más de 40 reseñas",
      reviewCountLabel: "reseñas",
      sourceLabel: "Perfil de Google Business",
      viewAll: "Ver todas en Google",
      items: [
        {
          name: "Ricardo Almeida",
          role: "CEO, TechFlux",
          content: "TAG08 transformó nuestra presencia digital. El Plan Base nos dio a constancia que faltaba y el ROI foi visible ya en el segundo mes.",
          date: "hace 2 meses"
        },
        {
          name: "Fernanda Costa",
          role: "Dir. de Marketing, Lumina",
          content: "Diseño de altísimo nivel y estrategia real. No es solo publicación, es construcción de marca. Lo recomiendo para quienes buscan la cima.",
          date: "hace 1 mes"
        },
        {
          name: "Bruno Mantovani",
          role: "Socio, Nexus Invest",
          content: "El profesionalismo del equipo es impresionante. El ciclo mensual de entrega está muy organizado y nos da total claridad del crecimiento.",
          date: "hace 3 semanas"
        }
      ]
    },
    videoGallery: {
      badge: "Prueba pública",
      title: "El canal TAG08 en",
      titleAccent: "vitrina viva.",
      subtitle: "Una selección siempre actualizada de los videos más recientes. Aquí la entrega se vuelve visible: ritmo, consistencia y volumen real de producción.",
      updated: "Actualizado automáticamente",
      featured: "Video destacado",
      latest: "Últimos videos",
      openChannel: "Abrir canal",
      watch: "Ver",
      loading: "Cargando los últimos videos...",
      error: "No fue posible cargar los videos ahora. Abra el canal para ver la biblioteca completa."
    },
    teamShowcase: {
      badge: "Núcleo senior",
      title: "El núcleo detrás de",
      titleAccent: "TAG08.",
      subtitle: "Carlos Martins creó TAG08. Ignacio y Pedro sostienen estrategia, operación y tecnología sin ruido innecesario.",
      featuredLabel: "Liderazgo activo",
      openProfile: "Abrir perfil",
      items: [
        {
          name: "Carlos Martins",
          role: "Fundador y dirección",
          summary: "Creó TAG08 y conduce la dirección estratégica de la operación.",
          focus: "Fundador",
          tags: [
            "Fundación",
            "Dirección",
            "Claridad"
          ],
          linkedinUrl: "https://www.linkedin.com/in/carlosmartins08/"
        },
        {
          name: "Ignacio Quiroz",
          role: "Estrategia y comunicación",
          summary: "Define posicionamiento y narrativa para convertir intención en dirección comercial.",
          focus: "Estrategia",
          tags: [
            "Posicionamiento",
            "Narrativa",
            "Oferta"
          ],
          linkedinUrl: "https://www.linkedin.com/in/ignacio-quiroz-b1568a52/"
        },
        {
          name: "Pedro V. Félix",
          role: "Datos y tecnología",
          summary: "Organiza datos, automatización y soporte técnico para decisiones más seguras.",
          focus: "Tecnología",
          tags: [
            "Datos",
            "Automatización",
            "Integración"
          ],
          linkedinUrl: "https://www.linkedin.com/in/pedrovsfelix/"
        }
      ]
    },
    strategicBenefits: {
      badge: "El estándar TAG08",
      title: "El Estándar Studio TAG08",
      subtitle: "Diferenciales que nos colocan en la cima de la cadena del marketing estratégico.",
      stats: {
        transparency: "Transparencia",
        roi: "ROI promedio"
      },
      items: [
        {
          title: "Consistencia Absoluta",
          desc: "No solo ejecutamos; pensamos tu negocio alrededor de activos digitales recurrentes."
        },
        {
          title: "Patrimonio de Marca",
          desc: "Construimos una autoridad que gana valor con el tiempo y genera deseo de compra real."
        },
        {
          title: "Equipo Senior",
          desc: "Acceso directo a consultores expertos, sin intermediarios ni pasantes."
        },
        {
          title: "Procesos Validados",
          desc: "Reemplaza el caos por la claridad de un flujo que protege tu productividad."
        }
      ]
    },
    calculator: {
      badge: "Calculadora de ROI",
      title: "¿Cuánto estás",
      titleAccent: "dejando en la mesa?",
      description: "El costo de la inercia es el impuesto más caro que paga su empresa. Calcule ahora el potencial de crecimiento descuidado.",
      revenueLabel: "Facturación Mensual",
      growthLabel: "Meta de Crecimiento",
      lossLabel: "Oportunidade Perdida Anual",
      monthlyLossLabel: "Crecimiento Mensual",
      newCeilingLabel: "Nuevo Techo Mensual",
      cta: "Capturar Oportunidad",
      disclaimer: "Análisis basado en benchmarking sénior"
    },
    investment: {
      badge: "Safety First",
      title: "Inversión",
      titleAccent: "Estratégica.",
      subtitle: "Claridad total sobre el valor de su transformación. Sin letra pequeña, solo desempeño de élite.",
      cardTitle: "Seguridad de Studio",
      fidelityTitle: "Cero Fidelidad",
      fidelityTag: "ELITE",
      fidelityDesc: "Enfoque en resultados. No atrapamos a nuestros clientes con contratos largos; nuestra retención se basa en el desempeño real.",
      cancelTitle: "Cancelación Flexible",
      cancelDesc: "¿Necesitas ajustar el rumbo? Basta con un aviso de 30 días. Simplicidad y ética en todos los extremos de nuestra operación.",
      offerTitle: "Su marca,",
      offerTitleAccent: "nuestro enfoque.",
      offerDesc: "Las operaciones de alto nivel requieren personalización. El valor del Plan Base se adapta a su necesidad de escala.",
      offerCta: "Solicitar Propuesta"
    },
    responsibilities: {
      badge: "The Partnership",
      title: "Su responsabilidad",
      titleAccent: "en el éxito.",
      subtitle: "El marketing de élite es una vía de doble sentido. Para llegar a la cima, necesitamos que su equipo esté sincronizado con nosotros:",
      items: [
        "Agilidad en las aprobaciones de creativos.",
        "Sincronía entre marketing e comercial.",
        "Participació ativa na reunião mensal.",
        "Feedback constante sobre los leads generados."
      ]
    },
    footer: {
      badge: "Consultoría de Élite",
      title: "Tu empresa lista para el",
      titleAccent: "siguiente nivel de madurez.",
      description: "TAG08 une estrategia de negocios, ingeniería de procesos y tecnología para transformar el caos operativo en máquinas de crecimiento autogestionadas.",
      ctaDiagnosis: "AGENDAR DIAGNÓSTICO",
      ctaDirection: "HABLAR CON LA DIRECCIÓN",
      headquarters: "Sede",
      centralSupport: "Central de atención",
      about: "Consultoría especializada en apalancamiento de negocios. Reemplazamos las 'conjeturas' con datos y el caos con procesos validados.",
      ecosystem: "Ecosistema TAG08",
      aboutTag08: "Sobre TAG08",
      blog: "Blog Estratégico",
      sebraetec: "Sebraetec",
      institutional: "Institucional",
      social: "Redes Sociales",
      socialDesc: "Siga el backstage de las consultorías e insights diarios de gestión.",
      rights: "TAG08 Estrategia Digital",
      allRights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      cookies: "Política de Cookies",
      preferences: "Preferencias de privacidad"
    },
    growthRoadmap: {
      title: "El Camino hacia el",
      titleAccent: "Próximo Nivel",
      subtitle: "No se trata de un servicio mensual, se trata de un viaje de escala predecible y rentable.",
      steps: {
        step1: {
          stage: "Fase 01",
          title: "Consolidación",
          desc: "Ajuste de cimientos, branding de élite y estructura de tráfico inicial."
        },
        step2: {
          stage: "Fase 02",
          title: "Escala",
          desc: "Expansión de presupuestos, optimización de embudos y dominio de audiencia."
        },
        step3: {
          stage: "Fase 03",
          title: "Aceleración",
          desc: "Lanzamientos y escala vertical para alcanzar el techo del mercado."
        },
        step4: {
          stage: "Fase 04",
          title: "Dominio",
          desc: "Autoridad incuestionable y liderazgo absoluto en su nicho."
        }
      }
    },
    strategyNotes: {
      hero: "Ingeniería visual enfocada en reducir el esfuerzo cognitivo.",
      metrics: "Optimización basada en heurísticas de usabilidad senior.",
      roadmap: "Visión 360 del LTV para máxima previsibilidade.",
      roi: "Predicción de pérdida anual por estancamento digital.",
      design: "Grid de elite para armonía visual absoluta.",
      blueprint: "Blueprint Mode: Visualizando las capas estratégicas."
    }
  },
  fr: {
    nicheHeadlines: {
      "real-estate": "Mettez vos biens en avant.",
      health: "Renforcez votre clinique.",
      tech: "Scalabilit? digitale d'?lite.",
      expert: "Votre autorité mérite une vitrine d’élite.",
      generic: "Vendez plus. Sans suppositions."
    },
    hero: {
      badge: "Plan de base Studio",
      title: "Vendez plus.",
      titleAccent: "Soyez plus visible.",
      description: "Nous transformons les entreprises stagnantes en marques dominantes grâce à une gestion stratégique du marketing et un design d'élite.",
      cta: "Programmer un diagnostic",
      limited: "Places Limitées",
      welcomeBack: "Bon retour",
      sourceMeta: "Maîtrisez le Social.",
      sourceGoogle: "Soyez en haut.",
      sourceLinkedin: "Conquérez le B2B.",
      heroAlt: "L'équipe de conseil stratégique de TAG08 planifie la croissance d'une marque premium",
      headlines: {
        data: "Des décisions basées sur des profits réels.",
        vision: "L'avenir de votre marque, aujourd'hui.",
        default: "Vendez plus. Soyez plus visible."
      }
    },
    navbar: {
      diagnosis: "Diagnostic",
      free: "Gratuit",
      menu: {
        problem: "Problème",
        solution: "Solution",
        plan: "Piliers",
        cycle: "Cycle",
        videos: "Vidéos",
        team: "?quipe",
        testimonials: "Témoignages",
        faq: "FAQ"
      }
    },
    valueProposition: {
      badge: "Notre proposition",
      title: "Nous sommes le bras droit",
      titleAccent: "de votre entreprise.",
      subtitle: "Le Plan Base TAG08 a été conçu pour les entreprises qui ont déjà validé leur produit et ont maintenant besoin d'une structure professionnelle pour évoluer sans la complexité de gérer plusieurs freelances.",
      features: {
        focus: {
          title: "Focus métier",
          desc: "Vous vous concentrez sur la vente et la livraison; nous gérons l'attraction et l'autorit? numérique."
        },
        data: {
          title: "Données et analyse",
          desc: "Des rapports mensuels clairs montrent ce qui génère du profit et ce qui doit changer."
        },
        scale: {
          title: "Scalabilit?",
          desc: "Des actions continues construisent la valeur de marque et l'autorit? dans la durée."
        }
      }
    },
    problem: {
      label: "Le Scénario Actuel",
      title: "Votre entreprise est-elle bloquée au stade du \"presque\" ?",
      description: "Le marketing amateur est la plus grande perte de liquidités pour votre entreprise. Sans gestion de studio, vous brûlez des ressources sans bâtir de patrimoine numérique.",
      items: [
        "Manque de cohérence dans la communication",
        "Publicité payante sans stratégie de conversion",
        "Incertitude sur le retour sur investissement",
        "Surcharge opérationnelle de l'associé"
      ],
      cards: {
        posts: "Publications Irrégulières",
        leads: "Leads Non Qualifiés",
        money: "Argent Gaspillé",
        brand: "Marque Invisible"
      }
    },
    pillars: {
      badge: "Architecture de livraison",
      title: "Les 4 Piliers de la Prestation",
      subtitle: "Une solution complète et intégrée pour votre consolidation numérique.",
      items: {
        strategy: {
          title: "Planification Stratégique",
          desc: "Définition des canaux, des personas, de la ligne éditoriale et du calendrier d'actions trimestriel axé sur la conversion."
        },
        content: {
          title: "Production d'?lite",
          desc: "Création de visuels pour les réseaux sociaux et les publicités, tout en maintenant le standard visuel premium de votre marque."
        },
        ads: {
          title: "Levier de trafic",
          desc: "Gestion professionnelle des campagnes Meta et Google pour maximiser le profit, pas seulement les clics."
        },
        analysis: {
          title: "Tableau de bord de performance",
          desc: "Tableau de bord en tempo réel et réunions mensuelles d'alignement avec des experts en marketing."
        }
      }
    },
    faq: {
      badge: "Knowledge Base",
      title: "Questions",
      titleAccent: "Fréquentes.",
      subtitle: "Une transparence radicale est l'un de nos piliers. Comprenez les détails avant de passer à l'étape suivante.",
      supportTitle: "Vous avez encore des questions ?",
      supportBody: "Notre équipe de consultants est disponible sur WhatsApp pour répondre aux demandes spécifiques de votre secteur.",
      supportCta: "Parler à un Consultant",
      items: [
        {
          question: "Le Plan de Base convient-il à tout type d'entreprise ?",
          answer: "Le Plan de Base est destiné aux entreprises ayant déjà validé leur modèle d'affaires et étant en phase de consolidation numérique, mais n'ayant pas d'équipe interne. Pas pour les débutants."
        },
        {
          question: "S'agit-il uniquement de gestion des réseaux sociaux ?",
          answer: "Non. Le Plan de Base va plus loin : diagnostic stratégique, planification, production, publication et analyse mensuelle pour une croissance numérique continue."
        },
        {
          question: "Sur quels canaux les contenus sont-il publiés ?",
          answer: "Le contenu est publié sur Instagram et Facebook, selon le planning mensuel. D'autres canaux peuvent être évalués dans des propositions spécifiques."
        },
        {
          question: "Qui crée les thèmes et les idées de contenu ?",
          answer: "TAG08 propose les thèmes stratégiques et le client peut contribuer avec ses suggestions. Le planning final est toujours validé ensemble avant la production."
        },
        {
          question: "Les vidéos doivent-elles être enregistrées par TAG08 ?",
          answer: "Pas nécessairement. Elles peuvent être enregistrées par TAG08 ou fournies par le client, à condition de respecter les directives pour assurer la cohérence."
        },
        {
          question: "Comment fonctionne le suivi des résultats ?",
          answer: "Chaque mois, nous organisons une réunion de suivi et livrons un rapport d'engagement, permettant d'ajuster la direction stratégique si nécessaire."
        },
        {
          question: "Existe-t-il un contrat d'engagement ?",
          answer: "Non. Le Plan de Base n'a pas d'engagement contractuel. En cas d'annulation, un simple préavis de 30 jours est requis."
        },
        {
          question: "Puis-je commander du contenu ou des services supplémentaires ?",
          answer: "Oui. Si nécessaire, des services ou contenus extras peuvent être commandés à la carte, sans modifier le format du Plan de Base."
        },
        {
          question: "Le Plan de Base garantit-il des résultats spécifiques ?",
          answer: "Nous ne faisons pas de promesses irréalistes. Nous offrons structure, méthode et constance. Les résultats dépendent du marché, du produit et du client."
        },
        {
          question: "Qu'est-ce qui est attendu du client pendant le plan ?",
          answer: "Le client doit fournir les matériaux dans les délais, désigner un point focal pour les validations et participer aux réunions mensuelles pour garantir la qualité."
        },
        {
          question: "Dans quel délai le contenu sera-t-il en ligne ?",
          answer: "Après validation du planning, nous lançons la production. Chaque mois, un nouveau cycle commence le 15, assurant prévisibilité et organisation."
        },
        {
          question: "Ce plan peut-il évoluer avec la croissance de mon entreprise ?",
          answer: "Oui. Le Plan de Base est conçu comme une porte d'entrée évolutive. À mesure que l'entreprise grandit, de nouvelles stratégies peuvent être intégrées."
        }
      ]
    },
    cta: {
      title: "Prêt pour le niveau suivant ?",
      desc: "Cliquez sur le bouton ci-dessous pour planifier une réunion de diagnostic gratuite avec notre équipe senior.",
      button: "Réserver via WhatsApp",
      highValueTitle: "Portez votre opération au sommet.",
      highValueButton: "Parler à un Associé Senior",
      disclaimer: "En cliquant, vous acceptez le traitement de vos données à des fins de contact commercial conformément à notre politique de confidentialité.",
      urgency: "Places limitées pour de nouveaux partenaires ce mois-ci"
    },
    contactRouting: {
      badge: "Acheminement direct",
      title: "Choisissez le",
      titleAccent: "bon canal.",
      subtitle: "Le Brésil et l'International / Espagnol suivent des routes différentes. Cela évite le bruit et vous dirige vers l'équipe qui traite votre cas.",
      helper: "Si vous êtes au Brésil, utilisez le canal national. Si vous êtes hors du pays ou avez besoin d'une assistance en espagnol, utilisez le canal international.",
      recommended: "Recommandé",
      disclaimer: "En démarrant le contact, vous autorisez TAG08 à traiter vos données à des fins de diagnostic commercial, conformément à notre politique de confidentialité.",
      routes: {
        br: {
          label: "Brésil",
          summary: "Assistance WhatsApp nationale pour les clients au Brésil.",
          button: "Ouvrir WhatsApp Brésil",
          message: "Olá, quero atendimento para o Brasil."
        },
        intl: {
          label: "International / Espagnol",
          summary: "Assistance WhatsApp pour les clients internationaux et les conversations en espagnol.",
          button: "Ouvrir WhatsApp International",
          message: "Hola, necesito atención internacional en español."
        }
      }
    },
    cookie: {
      title: "Confidentialité & Données",
      desc: "Nous utilisons des cookies pour optimiser votre experiência et analyser notre trafic.",
      accept: "Accepter",
      policy: "Politique de cookies",
      configure: "Configurer",
      acceptAll: "Tout accepter",
      customizeTitle: "Personnaliser les cookies",
      customizeSubtitle: "Votre choix influence la manière dont nous pouvons améliorer le site pour vous.",
      necessaryLabel: "Essentiels",
      necessaryDesc: "Nécessaires au bon fonctionnement du site.",
      analyticalLabel: "Analytiques",
      analyticalDesc: "Aident à comprendre le trafic et l'usage du site.",
      marketingLabel: "Marketing",
      marketingDesc: "Annonces plus pertinentes selon vos préférences.",
      back: "Retour",
      savePreferences: "Enregistrer les préférences"
    },
    privacy: {
      title: "Politique de Confidentialité",
      close: "Fermer",
      intro: "TAG08 Studio respecte votre vie privée et s'engage à proteger vos données personnelles.",
      sections: {
        data: {
          title: "Collecte de Données",
          text: "Nous collectons des informations de contact de base (nom, e-mail, téléphone) uniquement lorsque vous lancez volontairement une consultation ou un contact via WhatsApp."
        },
        cookies: {
          title: "Utilisation des Cookies",
          text: "Nous utilisons des cookies techniques pour assurer le fonctionnement du site et des cookies analitiques (Google Analytics) pour comprendre how to improve our diffusion de contenu."
        },
        rights: {
          title: "Vos Droits",
          text: "Vous avez le droit d'accéder, de corriger ou de demander la suppression de vos données à tout moment, comme prévu par le RGPD."
        },
        security: {
          title: "Sécurité",
          text: "Nous mettons en œuvre des protocoles de cryptage et un accès restreint pour garantir que vos informations stratégiques ne soient jamais partagées avec des tiers sans autorisation."
        }
      }
    },
    cookiePolicy: {
      title: "Politique relative aux cookies",
      intro: "Cette politique explique comment TAG08 utilise des cookies pour améliorer votre expérience de navigation et l'analyse des performances.",
      sections: {
        necessary: {
          title: "Cookies nécessaires",
          text: "Essentiels au fonctionnement de base du site, comme la navigation sur les pages et l'accès aux zones sécurisées. Le site ne peut pas fonctionner correctement sans eux."
        },
        analytical: {
          title: "Cookies de performance",
          text: "Nous aident à comprendre comment les visiteurs interagissent avec le site en collectant et en signalant des informations de manière anonyme via Google Analytics."
        },
        marketing: {
          title: "Cookies de marketing",
          text: "Utilisés pour suivre les visiteurs sur les sites web. L'intention est d'afficher des publicités qui soient relevantes et attrayantes para l'utilisateur individuel."
        },
        management: {
          title: "Gestion des préférences",
          text: "Vous pouvez gérer ou désactiver les cookies via les paramètres de votre navigateur à tout moment. Notez que la désactivation peut affecter votre expérience sur le site."
        }
      }
    },
    monthlyCycle: {
      title: "Cycle d'Exécution Récurrent",
      subtitle: "Le marketing n'est pas un événement, c'est un processus continu.",
      steps: {
        step1: {
          title: "Semaine 1 : Alignement",
          desc: "Réunion de lancement mensuelle pour définir les thèmes et objectifs stratégiques."
        },
        step2: {
          title: "Semaine 2 : Production",
          desc: "Développement des visuels, légendes et configuration technique des campagnes."
        },
        step3: {
          title: "Semaine 3 : Lancement",
          desc: "Activation des actions et début de la collecte des données de performance en temps réel."
        },
        step4: {
          title: "Semaine 4 : Analyse",
          desc: "Clôture du rapport avec des insights et des suggestions d'amélioration pour le cycle suivant."
        }
      },
      footerText: "Nous répétons le succès chaque mois"
    },
    testimonials: {
      title: "Reconnaissance d'Élite",
      subtitle: "Ce que nos partenaires disent de l'expérience TAG08 sur Google.",
      googleRating: "5.0",
      reviewCount: "plus de 40 avis",
      reviewCountLabel: "avis",
      sourceLabel: "Profil Google Business",
      viewAll: "Tout voir sur Google",
      items: [
        {
          name: "Ricardo Almeida",
          role: "CEO, TechFlux",
          content: "TAG08 a transformé notre présence numérique. Le Plan de Base nous a donné la constance qui nous manquait e le ROI était visible dès le deuxième mois.",
          date: "il y a 2 mois"
        },
        {
          name: "Fernanda Costa",
          role: "Dir. Marketing, Lumina",
          content: "Design de haut niveau et stratégie réelle. Ce n'est pas juste de l'affichage, c'est de la construction de marque. Je recommande pour ceux qui visent le sommet.",
          date: "il y a 1 mois"
        },
        {
          name: "Bruno Mantovani",
          role: "Associé, Nexus Invest",
          content: "Le professionnalisme de l'équipe est impressionnant. Le cycle de livraison mensuel est très organisé et nous donne une clarté totale sur la croissance.",
          date: "il y a 3 semaines"
        }
      ]
    },
    videoGallery: {
      badge: "Preuve publique",
      title: "La chaîne TAG08 en",
      titleAccent: "vitrine vivante.",
      subtitle: "Une sélection constamment mise à jour des dernières vidéos. C'est ici que la livraison devient visible : cadence, constance et volume réel de production.",
      updated: "Mise à jour automatique",
      featured: "Vidéo en vedette",
      latest: "Dernières vidéos",
      openChannel: "Ouvrir la chaîne",
      watch: "Regarder",
      loading: "Chargement des dernières vidéos...",
      error: "Impossible de charger les vidéos pour le moment. Ouvrez la chaîne pour voir la bibliothèque complète."
    },
    teamShowcase: {
      badge: "Noyau senior",
      title: "Le noyau derrière",
      titleAccent: "TAG08.",
      subtitle: "Carlos Martins a créé TAG08. Ignacio et Pedro soutiennent la stratégie, les opérations et la technologie sans bruit inutile.",
      featuredLabel: "Leadership actif",
      openProfile: "Ouvrir le profil",
      items: [
        {
          name: "Carlos Martins",
          role: "Fondateur et direction",
          summary: "A créé TAG08 et conduit la direction stratégique de l’opération.",
          focus: "Fondateur",
          tags: [
            "Fondation",
            "Direction",
            "Clarté"
          ],
          linkedinUrl: "https://www.linkedin.com/in/carlosmartins08/"
        },
        {
          name: "Ignacio Quiroz",
          role: "Stratégie et communication",
          summary: "Structure le positionnement et la narration pour transformer l’intention en direction commerciale.",
          focus: "Stratégie",
          tags: [
            "Positionnement",
            "Narration",
            "Offre"
          ],
          linkedinUrl: "https://www.linkedin.com/in/ignacio-quiroz-b1568a52/"
        },
        {
          name: "Pedro V. Félix",
          role: "Données et technologie",
          summary: "Organise les données, l’automatisation et le support technique pour des décisions plus sûres.",
          focus: "Technologie",
          tags: [
            "Données",
            "Automatisation",
            "Intégration"
          ],
          linkedinUrl: "https://www.linkedin.com/in/pedrovsfelix/"
        }
      ]
    },
    strategicBenefits: {
      badge: "La norme TAG08",
      title: "La norme TAG08",
      subtitle: "Des différentiels qui nous placent au sommet de la chaîne du marketing stratégique.",
      stats: {
        transparency: "Transparence",
        roi: "ROI moyen"
      },
      items: [
        {
          title: "Consistance Absolue",
          desc: "Présence numérique ininterrompue et professionnelle qui renforce l'autorité réelle."
        },
        {
          title: "Patrimoine de marque",
          desc: "Campagnes optimisées pour générer profit et échelle, évitant les métriques de vanité."
        },
        {
          title: "?quipe senior",
          desc: "Accès direct à des consultants experts, sans intermédiaires ni stagiaires."
        },
        {
          title: "Agilité",
          desc: "Exécution rapide et adaptation constante aux évolutions du marché numérique."
        }
      ]
    },
    calculator: {
      badge: "ROI Calculator",
      title: "Combien vous",
      titleAccent: "laissez sur la table ?",
      description: "Le coût de l'inertie est l'impôt le plus cher que votre entreprise paie. Calculez dès maintenant le potentiel de croissance négligé.",
      revenueLabel: "Chiffre d'Affaires Mensuel",
      growthLabel: "Objectif de Croissance",
      lossLabel: "Opportunité Perdue Annuelle",
      monthlyLossLabel: "Croissance Mensuelle",
      newCeilingLabel: "Nouveau Plafond Mensuel",
      cta: "Saisir l'Opportunité",
      disclaimer: "Analyse basée sur un benchmarking senior"
    },
    investment: {
      badge: "Safety First",
      title: "Investissement",
      titleAccent: "Stratégique.",
      subtitle: "Clarté totale sur la valeur de votre transformation. Pas de petits caractères, juste une performance d'élite.",
      cardTitle: "Sécurité du Studio",
      fidelityTitle: "Zéro Fidélité",
      fidelityTag: "ÉLITE",
      fidelityDesc: "Concentrez-vous sur les résultats. Nous n'enfermons pas nos clients avec des contrats longs ; notre rétention est basée sur la performance réelle.",
      cancelTitle: "Annulation Flexible",
      cancelDesc: "Besoin d'ajuster le cap ? Un simple préavis de 30 jours suffit. Simplicité et éthique à tous les niveaux de notre opération.",
      offerTitle: "Votre marque,",
      offerTitleAccent: "notre priorité.",
      offerDesc: "Les opérations de haut niveau exigent une personnalisation. La valeur du Plan de Base est adaptée à votre besoin d'échelle.",
      offerCta: "Demander une Proposition"
    },
    responsibilities: {
      badge: "The Partnership",
      title: "Votre responsabilité",
      titleAccent: "dans le succès.",
      subtitle: "Le marketing d'élite est une rue à double sens. Pour atteindre le sommet, nous avons besoin que votre équipe soit en phase avec nous :",
      items: [
        "Agilité dans les approbations de créations.",
        "Synchronisation entre le marketing et le commercial.",
        "Participation active à la réunion mensuelle.",
        "Feedback constant sur les leads générés."
      ]
    },
    footer: {
      badge: "Conseil d'?lite",
      title: "Votre entreprise prête pour le",
      titleAccent: "niveau de maturit? suivant.",
      description: "TAG08 unit stratégie d'entreprise, ingénierie des processus et technologie pour transformer le chaos opérationnel en machines de croissance autogérées.",
      ctaDiagnosis: "PLANIFIER UN DIAGNOSTIC",
      ctaDirection: "PARLER ? LA DIRECTION",
      headquarters: "Siège",
      centralSupport: "Support central",
      about: "Conseil spécialisé en levier commercial. Nous remplaçons les 'conjectures' par des données et le chaos par des processus validés.",
      ecosystem: "Écosystème TAG08",
      aboutTag08: "? propos de TAG08",
      blog: "Blog Stratégique",
      sebraetec: "Sebraetec",
      institutional: "Institutionnel",
      social: "Réseaux Sociaux",
      socialDesc: "Suivez les coulisses des missions et les insights de gestion au quotidien.",
      rights: "TAG08 Stratégie Digitale",
      allRights: "Tous droits réservés.",
      privacy: "Confidentialit?",
      cookies: "Politique de cookies",
      preferences: "Préférences de confidentialité"
    },
    growthRoadmap: {
      title: "Le Chemin vers le",
      titleAccent: "Prochain Niveau",
      subtitle: "Il ne s'agit pas d'un service mensuel, mais d'un voyage vers une échelle prévisible et rentable.",
      steps: {
        step1: {
          stage: "Phase 01",
          title: "Consolidation",
          desc: "Ajustement des fondations, branding d'élite et structure de trafic initiale."
        },
        step2: {
          stage: "Phase 02",
          title: "Mise à l'échelle",
          desc: "Expansion des budgets, optimisation des entonnoirs et domination de l'audience."
        },
        step3: {
          stage: "Phase 03",
          title: "Accélération",
          desc: "Lancements et mise à l'échelle verticale pour atteindre le plafond du marché."
        },
        step4: {
          stage: "Phase 04",
          title: "Domination",
          desc: "Autorité incontestable et leadership absolu dans votre niche."
        }
      }
    },
    strategyNotes: {
      hero: "Ingénierie visuelle axée sur la réduction de l'effort cognitif.",
      metrics: "Optimisation basée sur les heuristiques d'utilisabilité senior.",
      roadmap: "Vision 360 du LTV pour une prévisibilité maximale.",
      roi: "Prévision de perte annuelle due à la stagnation numérique.",
      design: "Grille d'élite pour une harmonie visuelle absolue.",
      blueprint: "Blueprint Mode: Visualisation des couches stratégiques."
    }
  }
};
