# FISABytes API Documentation

## Core Classes

### CookieManager
The main class responsible for cookie operations.

```typescript
class CookieManager {
  /**
   * Export cookies from the current domain
   * @returns Promise<Cookie[]> Array of exported cookies
   * @throws ValidationError if cookies are invalid
   */
  async exportCookies(): Promise<Cookie[]>;

  /**
   * Import cookies to the current domain
   * @param cookies Array of cookies to import
   * @returns Promise<ImportResult> Result of import operation
   * @throws ValidationError if cookies are invalid
   */
  async importCookies(cookies: Cookie[]): Promise<ImportResult>;
}
```

### CookieEncryption
Handles secure cookie encryption and decryption.

```typescript
class CookieEncryption {
  /**
   * Encrypt cookie data
   * @param data Cookie data to encrypt
   * @returns Promise<string> Encrypted data
   */
  async encrypt(data: any): Promise<string>;

  /**
   * Decrypt cookie data
   * @param encryptedData Encrypted cookie data
   * @returns Promise<any> Decrypted data
   * @throws SecurityError if decryption fails
   */
  async decrypt(encryptedData: string): Promise<any>;
}
```

### CookieValidator
Validates cookie data structure and content.

```typescript
class CookieValidator {
  /**
   * Validate cookie structure
   * @param cookie Cookie to validate
   * @returns boolean Validation result
   * @throws ValidationError if validation fails
   */
  validateCookie(cookie: Cookie): boolean;

  /**
   * Validate cookie batch
   * @param cookies Array of cookies to validate
   * @returns ValidationResult Detailed validation results
   */
  validateBatch(cookies: Cookie[]): ValidationResult;
}
```

## Types

### Cookie Interface
```typescript
interface Cookie {
  name: string;
  value: string;
  domain: string;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
  expirationDate?: number;
}
```

### ImportResult Interface
```typescript
interface ImportResult {
  success: boolean;
  importedCount: number;
  failedCount: number;
  errors?: Error[];
}
```

### ValidationResult Interface
```typescript
interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}
```

## Error Handling

### Error Types
```typescript
class ValidationError extends Error {
  constructor(message: string, code: string);
}

class SecurityError extends Error {
  constructor(message: string, code: string);
}

class ImportError extends Error {
  constructor(message: string, code: string);
}
```

## Events

### EventTypes
```typescript
enum EventType {
  IMPORT_START = 'import_start',
  IMPORT_COMPLETE = 'import_complete',
  EXPORT_START = 'export_start',
  EXPORT_COMPLETE = 'export_complete',
  VALIDATION_ERROR = 'validation_error',
  SECURITY_ERROR = 'security_error'
}
```

## Usage Examples

### Export Cookies
```typescript
const cookieManager = new CookieManager();
try {
  const cookies = await cookieManager.exportCookies();
  console.log('Cookies exported:', cookies.length);
} catch (error) {
  console.error('Export failed:', error.message);
}
```

### Import Cookies
```typescript
const cookieManager = new CookieManager();
try {
  const result = await cookieManager.importCookies(cookieData);
  console.log(`Imported ${result.importedCount} cookies`);
} catch (error) {
  console.error('Import failed:', error.message);
}
```

## Security Considerations

1. **Encryption**
   - Uses PBKDF2 for key derivation
   - Implements HMAC for integrity checking
   - Includes version control in encrypted data

2. **Validation**
   - Checks for malicious content
   - Validates cookie size limits
   - Enforces secure flag requirements

3. **Error Handling**
   - Implements retry mechanism
   - Provides detailed error messages
   - Includes error recovery options 