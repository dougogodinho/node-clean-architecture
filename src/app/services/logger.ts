export interface Logger {
  log: (...message: String[]) => void
  error: (...message: String[]) => void
}
