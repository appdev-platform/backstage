/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type JsonObject = { [key in string]: JsonValue };
export type JsonArray = JsonValue[];
export type JsonValue =
  | JsonObject
  | JsonArray
  | number
  | string
  | boolean
  | null;

export type AppConfig = {
  context: string;
  data: JsonObject;
};

export type Config = {
  keys(): string[];

  getConfig(key: string): Config;

  getConfigArray(key: string): Config[];

  getNumber(key: string): number;
  getOptionalNumber(key: string): number | undefined;

  getBoolean(key: string): boolean;
  getOptionalBoolean(key: string): boolean | undefined;

  getString(key: string): string;
  getOptionalString(key: string): string | undefined;

  getStringArray(key: string): string[];
  getOptionalStringArray(key: string): string[] | undefined;
};
