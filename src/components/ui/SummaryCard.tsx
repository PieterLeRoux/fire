'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  SvgIcon,
} from '@mui/material';

interface SummaryCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ComponentType;
  color: string;
  gradient?: string;
}

export default function SummaryCard({
  title,
  value,
  subtitle,
  icon: IconComponent,
  color,
  gradient,
}: SummaryCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        background: gradient || `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
        border: `1px solid ${color}30`,
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                mb: 1,
              }}
            >
              {title}
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 0.5,
              }}
            >
              {value}
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
          
          <Box
            sx={{
              backgroundColor: color,
              borderRadius: 2,
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 48,
              minHeight: 48,
            }}
          >
            <SvgIcon
              component={IconComponent}
              sx={{
                color: 'white',
                fontSize: 24,
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}