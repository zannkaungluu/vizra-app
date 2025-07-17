import {color} from 'react-native-elements/dist/helpers';
import {colors, fontFamilies, fontSizes, Spacing} from './theme';

export const Styles = {
  F_1: {
    flex: 1,
  },
  CET: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ROW: {
    flexDirection: 'row',
  },
  CTA_IB_LG: {
    color: colors.CTA,
    fontFamily: fontFamilies.INTER_BOLD,
    fontSize: fontSizes.LG,
  },
  CTA_IR_LG: {
    color: colors.CTA,
    fontFamily: fontFamilies.INTER_REGULAR,
    fontSize: fontSizes.LG,
  },
  CTA_IR_MD: {
    color: colors.CTA,
    fontFamily: fontFamilies.INTER_REGULAR,
    fontSize: fontSizes.MD,
  },
  HE_LB_XL: {
    color: colors.HEADING,
    fontFamily: fontFamilies.LATO_BOLD,
    fontSize: fontSizes.XL,
  },
  HE_LB_LG: {
    color: colors.HEADING,
    fontFamily: fontFamilies.LATO_BOLD,
    fontSize: fontSizes.LG,
  },
  HE_LB_SM: {
    color: colors.HEADING,
    fontFamily: fontFamilies.LATO_BOLD,
    fontSize: fontSizes.SM,
  },
  TE_LL_LG: {
    color: colors.TEXT,
    fontFamily: fontFamilies.LATO_LIGHT,
    fontSize: fontSizes.LG,
  },
  TE_LL_SM: {
    color: colors.TEXT,
    fontFamily: fontFamilies.LATO_LIGHT,
    fontSize: fontSizes.SM,
  },
  TE_LR_SM: {
    color: colors.TEXT,
    fontFamily: fontFamilies.LATO_REGULAR,
    fontSize: fontSizes.SM,
  },
  TE_IR_MD: {
    color: colors.TEXT,
    fontFamily: fontFamilies.INTER_REGULAR,
    fontSize: fontSizes.MD,
  },
  TE_IR_SM: {
    color: colors.TEXT,
    fontFamily: fontFamilies.INTER_REGULAR,
    fontSize: fontSizes.SM,
  },
  BL_LR_LG: {
    color: colors.BLACK,
    fontFamily: fontFamilies.LATO_REGULAR,
    fontSize: fontSizes.LG,
  },
  BL_IR_MD: {
    color: colors.BLACK,
    fontFamily: fontFamilies.INTER_REGULAR,
    fontSize: fontSizes.MD,
  },
  WH_IR_LG: {
    color: colors.WHITE,
    fontFamily: fontFamilies.INTER_REGULAR,
    fontSize: fontSizes.LG,
  },
  WH_IR_MD: {
    color: colors.WHITE,
    fontFamily: fontFamilies.INTER_REGULAR,
    fontSize: fontSizes.MD,
  },
  WH_IR_SM: {
    color: colors.WHITE,
    fontFamily: fontFamilies.INTER_REGULAR,
    fontSize: fontSizes.SM,
  },
  input: {
    flex: 1,
    borderColor: colors.TEXT,
    borderRadius: 5,
    paddingVertical: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.TEXT,
    borderRadius: Spacing.XS,
    paddingHorizontal: Spacing.SM,
    marginBottom: Spacing.MD,
  },
  underLine: {
    textDecorationLine: 'underline',
    color: colors.HEADING,
  },
};
