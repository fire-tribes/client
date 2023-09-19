// 기반이 되는 basic color
export const basic = {
  white: '#FFFFFF',
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',
  point_red01: '#E95353',
  point_red02: '#FECECF',
  point_blue01: '#00AEE4',
  point_blue02: '#0077E4',
  gray_blue: '#2F7287',
} as const;

// ui에서 사용되는 의미상 컬러
export const sementic = {
  light: {
    bg_white: basic.white,
    button_bg_gray: basic.gray3,
    button_bg_gray_blue: basic.gray_blue,
    button_bg_point_gray: basic.gray9,
    button_bg_point_blue: basic.point_blue02,
    rect_bg_point_red01: basic.point_red01,
    rect_bg_point_red02: basic.point_red02,
    input_bg_gray: basic.gray2,
    font_gray: basic.gray5,
    font_section_title: basic.gray_blue,
    ios_switch_background: basic.gray7,
  },
  dark: {
    bg_white: basic.white,
    button_bg_gray: basic.gray3,
    button_bg_gray_blue: basic.gray_blue,
    button_bg_point_gray: basic.gray9,
    button_bg_point_blue: basic.point_blue02,
    rect_bg_point_red01: basic.point_red01,
    rect_bg_point_red02: basic.point_red02,
    input_bg_gray: basic.gray2,
    font_gray: basic.gray5,
    font_section_title: basic.gray_blue,
    ios_switch_background: basic.gray7,
  },
};

export type BasicColor = typeof basic;
export type SementicColor = typeof sementic;

export type BasicColorKeys = keyof typeof basic;
export type SementicColorKeys = keyof typeof sementic;
