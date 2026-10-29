// ============================================================================
// 여행영어 실전 대사집 데이터 파일 (data.js) - 1번 ~ 50번 전체 원문 완벽 수록
// ============================================================================

const situationsData = [
  {
    id: 1,
    title: "조식은 몇 시부터예요?",
    category: "호텔",
    page: "p.09",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "조식은 몇 시부터예요?", en: "What time does breakfast start?", page: "p.09 핵심표현", note: "💡 TIP: What time does ~ start / end / open / close? 패턴 하나로 호텔의 모든 시간 질문이 해결됩니다.", extras: [
        { en: "What time does breakfast end?", kr: "조식은 몇 시까지예요?" },
        { en: "Where is breakfast served?", kr: "조식은 어디서 먹어요?" },
        { en: "Is breakfast included?", kr: "조식 포함인가요?" },
        { en: "Is breakfast complimentary?", kr: "조식은 무료인가요?" }
      ]},
      { role: "B", roleLabel: "B (호텔 직원)", kr: "조식은 6시 반에 시작해요.", en: "Breakfast starts at six thirty.", page: "p.09 영상대사", note: "💡 대답은 at 뒤에 나오는 시간만 잡으면 돼요.", extras: [
        { en: "What time does the pool open?", kr: "수영장은 몇 시에 열어요?" },
        { en: "What time does the gym close?", kr: "헬스장은 몇 시에 닫아요?" }
      ]},
      { role: "A", roleLabel: "A (투숙객)", kr: "조금 일찍 가도 돼요?", en: "Can I come a little earlier?", page: "p.09 영상대사", note: "", extras: [
        { en: "Do you serve breakfast on weekends too?", kr: "주말에도 조식 나와요?" },
        { en: "Can I get breakfast to go?", kr: "조식을 포장해 갈 수 있나요?" }
      ]},
      { role: "B", roleLabel: "B (호텔 직원)", kr: "6시 반에 문을 열어요.", en: "The doors open at six thirty.", page: "p.09 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (투숙객)", kr: "네, 감사합니다.", en: "Okay, thank you.", page: "p.09 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "좋은 아침이에요. 딱 맞춰 오셨네요.", en: "Good morning. Right on time.", page: "p.09 영상대사", note: "💡 Right on time: 시간에 딱 맞춰 왔을 때 쓰는 표현", extras: [] }
    ]
  },
  {
    id: 2,
    title: "가장 큰 사이즈로 주시겠어요?",
    category: "카페",
    page: "p.11",
    dialogues: [
      { role: "B", roleLabel: "B (직원)", kr: "안녕하세요. 뭐 드릴까요?", en: "Good morning. What can I get you?", page: "p.11 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "아이스 아메리카노 주세요.", en: "An iced Americano, please.", page: "p.11 영상대사", note: "", extras: [
        { en: "Can I get that with oat milk?", kr: "그거 귀리 우유로 바꿔주시겠어요?" },
        { en: "Less ice, please.", kr: "얼음 적게 주세요." },
        { en: "Can I get an extra shot?", kr: "샷 추가할 수 있을까요?" }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "사이즈는요?", en: "What size?", page: "p.11 영상대사", note: "", extras: [{ en: "What sizes do you have?", kr: "사이즈는 어떤 게 있어요?" }] },
      { role: "A", roleLabel: "A (손님)", kr: "가장 큰 사이즈로 주시겠어요?", en: "Can I get the largest size?", page: "p.11 핵심표현", note: "💡 반대 표현: Can I get the smallest size?", extras: [
        { en: "Can I get the smallest size?", kr: "제일 작은 사이즈로 주시겠어요?" },
        { en: "Can I get a medium?", kr: "중간 사이즈로 주세요." }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "제일 큰 거요? 정말요?", en: "The largest? Are you sure?", page: "p.11 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "네, 확실해요.", en: "Yes, please. I'm sure.", page: "p.11 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "더 필요한 거 있으세요?", en: "Anything else?", page: "p.11 영상대사", note: "", extras: [
        { en: "For here or to go?", kr: "드시고 가세요, 포장이세요?" },
        { en: "For here, please. / To go, please.", kr: "먹고 갈게요. / 포장이요." }
      ]},
      { role: "A", roleLabel: "A (손님)", kr: "아니요, 그게 다예요.", en: "No, that's it.", page: "p.11 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "주문자 이름 알려주시겠어요?", en: "Can I get a name for the order?", page: "p.11 영상대사", note: "💡 TIP: 미국 카페는 주문 후 이름을 물어봅니다.", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "알겠습니다. 금방 나올 거예요.", en: "Got it. That'll be right up.", page: "p.11 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 3,
    title: "포장해주시겠
