const stores = [
  {
    name: "산카쿠 전대본점",
    address: "광주 북구 용봉로138번길 24 1층",
    roadAddress: "광주 북구 중흥동 337-4",
    phone: "0507-1308-3995",
    description:
      "광주맛집, 광주전대 인근에서 맛있는 오니기리를 즐길 수 있는 산카쿠 전대본점은 전대후문에서 도보 약 5분 거리에 위치하고 있습니다.",
    accessInfo: {
      walk: [
        "전대 후문에서 도보 약 5분",
        "광주역에서 차량 5분",
        "북구보건소에서 3분",
        "북구청에서 도보 5분",
        "메가박스 전대에서 도보 6분",
      ],
      car: ["효죽 공영주차장(1시간 무료) 이용 가능"],
    },
    hours: {
      wed: "11:00 - 20:30",
      thu: "11:00 - 20:30",
      fri: "11:00 - 20:30",
      sat: "11:00 - 20:30",
      sun: "11:00 - 20:30",
      mon: "휴무",
      tue: "11:00 - 20:30",
    },
    features: ["수제 오니기리", "라멘", "우동", "일본 가정식"],
    mapUrl:
      "https://map.naver.com/p/entry/place/1477045231?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202509101426&locale=ko&svcName=map_pcv5",
  },
  {
    name: "산카쿠 인계점",
    address: "경기 수원시 팔달구 인계로124번길 27-10 1층 115호, 116호",
    roadAddress: "경기 수원시 팔달구 인계동 1040",
    phone: "0507-1412-2158",
    description: "수원 인계동에 위치한 산카쿠 인계점입니다.",
    accessInfo: {
      walk: ["수원시청역 6번 출구에서 508m"],
      car: [
        "주차가능(유료)",
        "추가 요금: 60분당 6,000원, 최대 100,000원",
        "엘리시아 타워 건물 주차 가능 (1시간 무료 주차)",
      ],
    },
    hours: {
      wed: "11:00 - 20:30",
      thu: "11:00 - 20:30",
      fri: "11:00 - 20:30",
      sat: "11:00 - 20:30",
      sun: "11:00 - 20:30",
      mon: "휴무",
      tue: "11:00 - 20:30",
    },
    features: ["수제 오니기리", "라멘", "우동", "일본 가정식"],
    mapUrl:
      "https://map.naver.com/p/search/%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EB%9D%BC%EB%A9%98/place/2096410906?placePath=/home?entry=pll&from=nx&fromNxList=true&from=map&fromPanelNum=2&timestamp=202509101427&locale=ko&svcName=map_pcv5&searchText=%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EB%9D%BC%EB%A9%98&placeSearchOption=entry%3Dpll%26fromNxList%3Dtrue%26x%3D126.928950%26y%3D35.171035&searchType=place",
  },
  {
    name: "산카쿠 충대점",
    address: "대전 유성구 궁동로18번길 13 1층 산카쿠",
    roadAddress: "대전 유성구 궁동 395-11",
    phone: "0507-1441-0480",
    description:
      "충남대학교 바로 옆에 위치하고 있는 대전 궁동 맛집 산카쿠충대점입니다. 대전하면 성심당 많이들 오시잖아요? 성심당가시기 전에 산카쿠충대점에 들려서 맛있는 한 끼 하고 가시는건 어떠신가요?",
    accessInfo: {
      walk: [
        "네이버지도에 '산카쿠충대점' 검색하고 오시면 편리합니다!",
        "가장 가까운 역: 유성온천역 (도보 15분, 차량 5분)",
        "102번, 105번, 106번, 108번, 113번 버스 탑승 후 충남대 정문에서 하차하면 도보 3분",
      ],
      car: ["유성온천역에서 차량으로 5분", "충남대학교 바로 옆에 위치"],
    },
    hours: {
      wed: "11:00 - 20:30",
      thu: "11:00 - 20:30",
      fri: "11:00 - 20:30",
      sat: "11:00 - 20:30",
      sun: "11:00 - 20:30",
      mon: "휴무",
      tue: "11:00 - 20:30",
    },
    features: ["수제 오니기리", "라멘", "우동", "일본 가정식"],
    mapUrl:
      "https://map.naver.com/p/search/%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EB%9D%BC%EB%A9%98/place/1483231321?placePath=%3Fentry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=entry%3Dpll%26fromNxList%3Dtrue%26x%3D126.928950%26y%3D35.171035&searchType=place",
  },
];

export default stores;
