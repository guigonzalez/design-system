import tokens from '../tokens.json';

// Tipos para os tokens
export interface DesignTokens {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    success: Record<string, string>;
    warning: Record<string, string>;
    error: Record<string, string>;
    neutral: Record<string, string>;
    background: Record<string, string>;
    text: Record<string, string>;
    border: Record<string, string>;
  };
  typography: {
    fontFamily: Record<string, string[]>;
    fontSize: Record<string, string>;
    fontWeight: Record<string, string>;
    lineHeight: Record<string, string>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  borderWidth: Record<string, string>;
  shadows: Record<string, string>;
  zIndex: Record<string, string>;
  breakpoints: Record<string, string>;
  transitions: {
    duration: Record<string, string>;
    easing: Record<string, string>;
  };
}

// Função para acessar tokens de forma segura
export const getToken = (path: string): string => {
  const keys = path.split('.');
  let value: any = tokens;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      console.warn(`Token not found: ${path}`);
      return '';
    }
  }
  
  return String(value);
};

// Funções utilitárias para tokens específicos
export const getColor = (color: string, shade?: string): string => {
  if (shade) {
    return getToken(`colors.${color}.${shade}`);
  }
  // Se não há shade, retorna a cor padrão (500) ou a primeira disponível
  const colorObj = tokens.colors[color as keyof typeof tokens.colors];
  if (colorObj && typeof colorObj === 'object') {
    const colorValues = colorObj as Record<string, string>;
    return colorValues['500'] || Object.values(colorValues)[0] || '';
  }
  return '';
};

export const getSpacing = (size: string | number): string => {
  return getToken(`spacing.${size}`);
};

export const getFontSize = (size: string): string => {
  return getToken(`typography.fontSize.${size}`);
};

export const getFontWeight = (weight: string): string => {
  return getToken(`typography.fontWeight.${weight}`);
};

export const getFontFamily = (family: string): string => {
  const fontFamily = getToken(`typography.fontFamily.${family}`);
  // Retorna como string CSS válida
  return fontFamily.replace(/[\[\]"]/g, '');
};

export const getLineHeight = (height: string): string => {
  return getToken(`typography.lineHeight.${height}`);
};

export const getTypography = (type: string, property: string): string => {
  return getToken(`typography.${type}.${property}`);
};

export const getBorderRadius = (size: string): string => {
  return getToken(`borderRadius.${size}`);
};

export const getBorderWidth = (width: string): string => {
  return getToken(`borderWidth.${width}`);
};

export const getShadow = (size: string): string => {
  return getToken(`shadows.${size}`);
};

export const getZIndex = (index: string): string => {
  return getToken(`zIndex.${index}`);
};

export const getBreakpoint = (breakpoint: string): string => {
  return getToken(`breakpoints.${breakpoint}`);
};

export const getTransition = (type: 'duration' | 'easing', value: string): string => {
  return getToken(`transitions.${type}.${value}`);
};

// Funções de conveniência para cores específicas
export const getPrimaryColor = (shade?: string): string => getColor('primary', shade);
export const getSecondaryColor = (shade?: string): string => getColor('secondary', shade);
export const getSuccessColor = (shade?: string): string => getColor('success', shade);
export const getWarningColor = (shade?: string): string => getColor('warning', shade);
export const getErrorColor = (shade?: string): string => getColor('error', shade);

// Funções de conveniência para tamanhos de fonte
export const getSmallFontSize = (): string => getFontSize('sm');
export const getMediumFontSize = (): string => getFontSize('base');
export const getLargeFontSize = (): string => getFontSize('lg');

// Exportar tokens como default
export default tokens as DesignTokens; 