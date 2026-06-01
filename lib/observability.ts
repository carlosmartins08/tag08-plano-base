type LogLevel = 'info' | 'warn' | 'error';

type LogPayload = {
  message: string;
  scope: string;
  details?: Record<string, unknown>;
  error?: unknown;
};

const sanitizeError = (error: unknown) => {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
    };
  }

  return { message: String(error) };
};

const emitLog = (level: LogLevel, payload: LogPayload) => {
  const record = {
    level,
    timestamp: new Date().toISOString(),
    scope: payload.scope,
    message: payload.message,
    details: payload.details ?? {},
    error: payload.error ? sanitizeError(payload.error) : undefined,
  };

  const output = JSON.stringify(record);

  if (level === 'error') {
    console.error(output);
    return;
  }

  if (level === 'warn') {
    console.warn(output);
    return;
  }

  console.info(output);
};

export const logInfo = (payload: LogPayload) => emitLog('info', payload);
export const logWarn = (payload: LogPayload) => emitLog('warn', payload);
export const logError = (payload: LogPayload) => emitLog('error', payload);
