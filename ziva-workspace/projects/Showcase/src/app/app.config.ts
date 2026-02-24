import { ApplicationConfig, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import {
  LucideAngularModule,
  // Base / Shell
  Circle, Square, Type,
  // Basic
  Home, Settings, User, Bell, Search,
  // Color / Semantic
  Zap, CheckCircle, XCircle, AlertTriangle, Info,
  // Hover pairs
  Eye, EyeOff, Heart, HeartCrack, Star, StarOff, Lock, LockOpen,
  // Disabled
  Save, Trash2,
  // Click events
  Download, Share2, Copy,
} from 'lucide-angular';

/**
 * REGISTERED ICONS — single source of truth.
 * Only icons listed in LucideAngularModule.pick() below are rendered in the app.
 * To add more icons: import them above and add to the pick() call.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({
        // Base / Shell
        Circle, Square, Type,
        // Basic
        Home, Settings, User, Bell, Search,
        // Color / Semantic
        Zap, CheckCircle, XCircle, AlertTriangle, Info,
        // Hover pairs
        Eye, EyeOff, Heart, HeartCrack, Star, StarOff, Lock, LockOpen,
        // Disabled
        Save, Trash2,
        // Click events
        Download, Share2, Copy,
      })
    ),
  ],
};
