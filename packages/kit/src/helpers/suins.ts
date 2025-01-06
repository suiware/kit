import type { SuinsClient } from '@mysten/suins'

export const resolveSuinsName = async (
  suinsClient: SuinsClient,
  name: string
): Promise<string | null> => {
  const nameRecord = await suinsClient.getNameRecord(name)
  return nameRecord?.targetAddress || null
}
