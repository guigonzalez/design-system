import React from 'react';
import tokens from '../tokens.json';

export default {
  title: 'Design Tokens/Visualização',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Visualização interativa dos design tokens definidos em tokens.json.'
      }
    }
  }
};

const colorGroups = tokens.colors || {};
const spacing = tokens.spacing || {};
const fontSize = tokens.typography?.fontSize || {};
const borderRadius = tokens.borderRadius || {};
const fontFamily = tokens.typography?.fontFamily || {};
const fontWeight = tokens.typography?.fontWeight || {};

export const Colors = () => (
  <section style={{ padding: 32 }}>
    <h2 style={{ fontSize: 24, marginBottom: 16 }}>🎨 Cores</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {Object.entries(colorGroups).map(([group, values]) => (
        <div key={group} style={{ minWidth: 120 }}>
          <h4 style={{ marginBottom: 8 }}>{group}</h4>
          {typeof values === 'object' && values !== null ? (
            Object.entries(values).map(([name, value]) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{
                  display: 'inline-block',
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  background: value as string,
                  border: '1px solid #e5e7eb',
                  marginRight: 12
                }} />
                <span style={{ fontFamily: 'monospace', fontSize: 14 }}>{group}.{name}</span>
                <span style={{ marginLeft: 8, color: '#64748b', fontSize: 13 }}>{value as string}</span>
              </div>
            ))
          ) : null}
        </div>
      ))}
    </div>
  </section>
);

export const Spacing = () => (
  <section style={{ padding: 32 }}>
    <h2 style={{ fontSize: 24, marginBottom: 16 }}>📏 Espaçamentos</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {Object.entries(spacing).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ width: value as string, height: 16, background: '#3b82f6', borderRadius: 4, marginRight: 12 }} />
          <span style={{ fontFamily: 'monospace', fontSize: 14 }}>{key}</span>
          <span style={{ marginLeft: 8, color: '#64748b', fontSize: 13 }}>{value as string}</span>
        </div>
      ))}
    </div>
  </section>
);

export const FontSizes = () => (
  <section style={{ padding: 32 }}>
    <h2 style={{ fontSize: 24, marginBottom: 16 }}>🔠 Font Sizes</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {Object.entries(fontSize).map(([key, value]) => (
        <div key={key} style={{ marginBottom: 12 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 14 }}>{key}</span>
          <span style={{ marginLeft: 8, color: '#64748b', fontSize: 13 }}>{value as string}</span>
          <div style={{ fontSize: value as string, marginTop: 4, fontWeight: 500 }}>
            Exemplo {key}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const BorderRadius = () => (
  <section style={{ padding: 32 }}>
    <h2 style={{ fontSize: 24, marginBottom: 16 }}>🟦 Border Radius</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {Object.entries(borderRadius).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ width: 40, height: 40, background: '#3b82f6', borderRadius: value as string, marginRight: 12 }} />
          <span style={{ fontFamily: 'monospace', fontSize: 14 }}>{key}</span>
          <span style={{ marginLeft: 8, color: '#64748b', fontSize: 13 }}>{value as string}</span>
        </div>
      ))}
    </div>
  </section>
);

export const FontFamily = () => (
  <section style={{ padding: 32 }}>
    <h2 style={{ fontSize: 24, marginBottom: 16 }}>🔤 Font Family</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {Object.entries(fontFamily).map(([key, value]) => (
        <div key={key} style={{ marginBottom: 12 }}>
          <span style={{ fontFamily: Array.isArray(value) ? value.join(', ') : value as string, fontSize: 18 }}>Exemplo {key}</span>
          <span style={{ marginLeft: 8, color: '#64748b', fontSize: 13 }}>{Array.isArray(value) ? value.join(', ') : value as string}</span>
        </div>
      ))}
    </div>
  </section>
);

export const FontWeight = () => (
  <section style={{ padding: 32 }}>
    <h2 style={{ fontSize: 24, marginBottom: 16 }}>🅱️ Font Weight</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {Object.entries(fontWeight).map(([key, value]) => (
        <div key={key} style={{ marginBottom: 12 }}>
          <span style={{ fontWeight: Number(value), fontSize: 18 }}>Peso {key}</span>
          <span style={{ marginLeft: 8, color: '#64748b', fontSize: 13 }}>{value as string}</span>
        </div>
      ))}
    </div>
  </section>
); 