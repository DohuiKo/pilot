/**
 * AI Configuration
 * AI 서비스 관련 설정 (OpenAI + 네이버 지역검색 검증)
 */

const AI_CONFIG = {
    // OpenAI API 키 (장소 추천 생성)
    API_KEY: '',

    // 사용할 OpenAI 모델
    MODEL: 'gpt-4o-mini',

    // 네이버 검색 API (장소 존재 여부 검증 — 할루시네이션 필터링)
    // https://developers.naver.com/apps 에서 발급
    NAVER_CLIENT_ID: 'SWx1Um0tOIs6Y0OeR14X',
    NAVER_CLIENT_SECRET: 'CapOJ20lkI'
};
