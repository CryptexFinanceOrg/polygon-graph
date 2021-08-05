// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Vault extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vault entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vault entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vault", id.toString(), this);
  }

  static load(id: string): Vault | null {
    return store.get("Vault", id) as Vault | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vaultId(): BigInt | null {
    let value = this.get("vaultId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set vaultId(value: BigInt | null) {
    if (value === null) {
      this.unset("vaultId");
    } else {
      this.set("vaultId", Value.fromBigInt(value as BigInt));
    }
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get collateral(): BigInt | null {
    let value = this.get("collateral");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set collateral(value: BigInt | null) {
    if (value === null) {
      this.unset("collateral");
    } else {
      this.set("collateral", Value.fromBigInt(value as BigInt));
    }
  }

  get debt(): BigInt | null {
    let value = this.get("debt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set debt(value: BigInt | null) {
    if (value === null) {
      this.unset("debt");
    } else {
      this.set("debt", Value.fromBigInt(value as BigInt));
    }
  }

  get currentRatio(): BigInt | null {
    let value = this.get("currentRatio");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set currentRatio(value: BigInt | null) {
    if (value === null) {
      this.unset("currentRatio");
    } else {
      this.set("currentRatio", Value.fromBigInt(value as BigInt));
    }
  }

  get address(): Bytes | null {
    let value = this.get("address");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes | null) {
    if (value === null) {
      this.unset("address");
    } else {
      this.set("address", Value.fromBytes(value as Bytes));
    }
  }
}

export class State extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save State entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save State entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("State", id.toString(), this);
  }

  static load(id: string): State | null {
    return store.get("State", id) as State | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get isPaused(): boolean {
    let value = this.get("isPaused");
    return value.toBoolean();
  }

  set isPaused(value: boolean) {
    this.set("isPaused", Value.fromBoolean(value));
  }

  get tcapContract(): Bytes | null {
    let value = this.get("tcapContract");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tcapContract(value: Bytes | null) {
    if (value === null) {
      this.unset("tcapContract");
    } else {
      this.set("tcapContract", Value.fromBytes(value as Bytes));
    }
  }

  get collateralContract(): Bytes | null {
    let value = this.get("collateralContract");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set collateralContract(value: Bytes | null) {
    if (value === null) {
      this.unset("collateralContract");
    } else {
      this.set("collateralContract", Value.fromBytes(value as Bytes));
    }
  }

  get collateralOracle(): Bytes | null {
    let value = this.get("collateralOracle");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set collateralOracle(value: Bytes | null) {
    if (value === null) {
      this.unset("collateralOracle");
    } else {
      this.set("collateralOracle", Value.fromBytes(value as Bytes));
    }
  }

  get ethContract(): Bytes | null {
    let value = this.get("ethContract");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set ethContract(value: Bytes | null) {
    if (value === null) {
      this.unset("ethContract");
    } else {
      this.set("ethContract", Value.fromBytes(value as Bytes));
    }
  }

  get tcapOracle(): Bytes | null {
    let value = this.get("tcapOracle");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tcapOracle(value: Bytes | null) {
    if (value === null) {
      this.unset("tcapOracle");
    } else {
      this.set("tcapOracle", Value.fromBytes(value as Bytes));
    }
  }

  get burnFee(): BigInt | null {
    let value = this.get("burnFee");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set burnFee(value: BigInt | null) {
    if (value === null) {
      this.unset("burnFee");
    } else {
      this.set("burnFee", Value.fromBigInt(value as BigInt));
    }
  }

  get liquidationPenalty(): BigInt | null {
    let value = this.get("liquidationPenalty");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set liquidationPenalty(value: BigInt | null) {
    if (value === null) {
      this.unset("liquidationPenalty");
    } else {
      this.set("liquidationPenalty", Value.fromBigInt(value as BigInt));
    }
  }

  get ratio(): BigInt | null {
    let value = this.get("ratio");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set ratio(value: BigInt | null) {
    if (value === null) {
      this.unset("ratio");
    } else {
      this.set("ratio", Value.fromBigInt(value as BigInt));
    }
  }

  get divisor(): BigInt | null {
    let value = this.get("divisor");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set divisor(value: BigInt | null) {
    if (value === null) {
      this.unset("divisor");
    } else {
      this.set("divisor", Value.fromBigInt(value as BigInt));
    }
  }

  get amountStaked(): BigInt | null {
    let value = this.get("amountStaked");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountStaked(value: BigInt | null) {
    if (value === null) {
      this.unset("amountStaked");
    } else {
      this.set("amountStaked", Value.fromBigInt(value as BigInt));
    }
  }

  get rewardContract(): Bytes | null {
    let value = this.get("rewardContract");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set rewardContract(value: Bytes | null) {
    if (value === null) {
      this.unset("rewardContract");
    } else {
      this.set("rewardContract", Value.fromBytes(value as Bytes));
    }
  }

  get treasuryContract(): Bytes | null {
    let value = this.get("treasuryContract");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set treasuryContract(value: Bytes | null) {
    if (value === null) {
      this.unset("treasuryContract");
    } else {
      this.set("treasuryContract", Value.fromBytes(value as Bytes));
    }
  }
}

export class Oracle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Oracle entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Oracle entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Oracle", id.toString(), this);
  }

  static load(id: string): Oracle | null {
    return store.get("Oracle", id) as Oracle | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes | null {
    let value = this.get("address");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes | null) {
    if (value === null) {
      this.unset("address");
    } else {
      this.set("address", Value.fromBytes(value as Bytes));
    }
  }

  get answer(): BigInt | null {
    let value = this.get("answer");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set answer(value: BigInt | null) {
    if (value === null) {
      this.unset("answer");
    } else {
      this.set("answer", Value.fromBigInt(value as BigInt));
    }
  }

  get updatedAt(): BigInt | null {
    let value = this.get("updatedAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updatedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("updatedAt");
    } else {
      this.set("updatedAt", Value.fromBigInt(value as BigInt));
    }
  }

  get roundId(): BigInt | null {
    let value = this.get("roundId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set roundId(value: BigInt | null) {
    if (value === null) {
      this.unset("roundId");
    } else {
      this.set("roundId", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Protocol extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Protocol entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Protocol entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Protocol", id.toString(), this);
  }

  static load(id: string): Protocol | null {
    return store.get("Protocol", id) as Protocol | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes | null {
    let value = this.get("address");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes | null) {
    if (value === null) {
      this.unset("address");
    } else {
      this.set("address", Value.fromBytes(value as Bytes));
    }
  }

  get totalCollateral(): BigInt | null {
    let value = this.get("totalCollateral");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalCollateral(value: BigInt | null) {
    if (value === null) {
      this.unset("totalCollateral");
    } else {
      this.set("totalCollateral", Value.fromBigInt(value as BigInt));
    }
  }

  get totalDebt(): BigInt | null {
    let value = this.get("totalDebt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalDebt(value: BigInt | null) {
    if (value === null) {
      this.unset("totalDebt");
    } else {
      this.set("totalDebt", Value.fromBigInt(value as BigInt));
    }
  }

  get totalBurnFee(): BigInt | null {
    let value = this.get("totalBurnFee");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalBurnFee(value: BigInt | null) {
    if (value === null) {
      this.unset("totalBurnFee");
    } else {
      this.set("totalBurnFee", Value.fromBigInt(value as BigInt));
    }
  }

  get createdVaults(): BigInt | null {
    let value = this.get("createdVaults");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdVaults(value: BigInt | null) {
    if (value === null) {
      this.unset("createdVaults");
    } else {
      this.set("createdVaults", Value.fromBigInt(value as BigInt));
    }
  }

  get totalTransactions(): BigInt | null {
    let value = this.get("totalTransactions");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalTransactions(value: BigInt | null) {
    if (value === null) {
      this.unset("totalTransactions");
    } else {
      this.set("totalTransactions", Value.fromBigInt(value as BigInt));
    }
  }
}
