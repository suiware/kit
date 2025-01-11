import { useSignAndExecuteTransaction, useSuiClient } from '@mysten/dapp-kit'
import { Transaction } from '@mysten/sui/transactions'
import type { SuiSignAndExecuteTransactionOutput } from '@mysten/wallet-standard'

export interface IUseTransactParams {
   /**
   * (Optional) Is executed when user triggers a transaction.
   */
  onBeforeStart?: () => void
  /**
   * (Optional) React on success, e.g. refetch dependent queries.
   *
   * @param {SuiSignAndExecuteTransactionOutput} data The transaction output.
   */
  onSuccess?: (data: SuiSignAndExecuteTransactionOutput) => void
  /**
   * (Optional) React on error.
   *
   * @param {Error} e The error.
   */
  onError?: (e: Error) => void
}

export interface IUseTransactResponse {
  /**
   * Perform a transaction on the Sui network.
   *
   * @param {Transaction} tx The transaction to perform.
   */
  transact: (tx: Transaction) => void
}

/**
 * The useTransact() hook lets you perform a transaction on the Sui network.
 *
 * When user triggers a transaction, we display a notification to confirm that transaction in their wallet.
 * Once user confirmed or rejected the transaction, we convert that notification to a success message or error message.
 * The success message will have a link to a Sui Explorer depending on the active network.
 * In case of error, we additionally print full error message in the browser console.
 *
 * Usage:
 * ```ts
 * import type { SuiSignAndExecuteTransactionOutput } from '@mysten/wallet-standard'
 * import { Transaction } from '@mysten/sui/transactions'
 * const { transact: greet } = useTransact({
 *   onBeforeStart: () => {},
 *   onSuccess: (data: SuiSignAndExecuteTransactionOutput) => {},
 *   onError: (e: Error) => {}
 * })
 *
 * const prepareTransaction = (packageId: string, objectId: string, name: string) => {
 *   const tx = new Transaction()
 *   tx.moveCall({
 *     arguments: [tx.object(objectId), tx.pure.string(name), tx.object('0x8')],
 *     target: `${packageId}::greeting::set_greeting`,
 *   })
 *   return tx
 * }
 *
 * greet(prepareTransaction(packageId, objectId, name))
 * ```
 *
 * @param {IUseTransactParams} The hook params.
 * @returns {IUseTransactResponse} An object with the transact function.
 */
const useTransact = ({
  onBeforeStart,
  onSuccess,
  onError,
}: IUseTransactParams = {}): IUseTransactResponse => {
  const client = useSuiClient()
  const { mutate: signAndExecute } = useSignAndExecuteTransaction()

  const transact = (tx: Transaction) => {
    if (onBeforeStart != null) {
      onBeforeStart()
    }

    signAndExecute(
      {
        transaction: tx,
      },
      {
        onError: (e: Error) => {
          if (onError != null) {
            onError(e)
          }
        },
        onSuccess: (data: SuiSignAndExecuteTransactionOutput) => {
          client
            .waitForTransaction({
              digest: data.digest,
            })
            .then(() => {
              if (onSuccess != null) {
                onSuccess(data)
              }
            })
            .catch((e) => {
              if (onError != null) {
                onError(e)
              }
            })
        },
      }
    )
  }

  return { transact }
}

export default useTransact
