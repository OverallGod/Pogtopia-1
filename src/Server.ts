import Redis = require("ioredis");

export class Server
{
  public redis = new Redis();

  constructor()
  {
    this.setup();
  }

  private async setup(): Promise<void>
  {
  }

  public isZlibHeaderCorrect(data: Buffer): boolean
  {
    /*
      HEADERS (in bytes/hex):
      78 01 - No Compression/Low
      78 9C - Default Compression
      78 DA - Best Compression
    */

    const headers: number[] = [
      0x178,  // No compression
      0x9c78, // Default Compression
      0xda78, // Best Compression
    ];

    return headers.includes(data.readUInt16LE()); // lets just read the first 2 bytes of the buffer, that's where the header is located
  }
}