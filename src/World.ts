class World
{
  private HEADER: string = "POGTOPIA_WORLD";

  constructor()
  {}

  public static toBytes(): Buffer
  {
    return Buffer.alloc(0); // todo
  }

  public toBytes(): Buffer
  {
    return World.toBytes();
  }

  public static parseBytes(): void
  {}

  public parseBytes(): void
  {
    return World.parseBytes();
  }
}