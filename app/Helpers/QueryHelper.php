<?php

namespace App\Helpers;

use Illuminate\Database\Eloquent\Builder;

class QueryHelper
{
    // filter ini mengandung operation dan value: seperti like, =, >, <, >=, <=, between, in, not in, not between
    public static function applyFilter(Builder $query, array $filters = [], array $relations = []): Builder
    {
        if (!empty($filters)) {
            foreach ($filters as $key => $filter) {
                if (isset($filter['value'])) {
                    $op = $filter['operator'] ?? 'like';
                    $v = $op === 'like' ? '%' . $filter['value'] . '%' : $filter['value'];
                    $query->where($key, $op, $v);
                }
            }
        }

        if (!empty($relations)) {
            foreach ($relations as $relations => $relationFilter) {
                if (isset($relationFilter['value'])) {
                    $query->whereHas($relations, function (Builder $q) use ($relationFilter) {
                        $op = $relationFilter['operator'] ?? 'like';
                        $v = $op === 'like' ? '%' . $relationFilter['value'] . '%' : $relationFilter['value'];
                        $q->where($relationFilter['key'], $op, $v);
                    });
                }
            }
        }

        return $query;
    }

    public static function applySort(Builder $query, array $sorts = [])
    {
        if (!empty($sorts)) {
            foreach ($sorts as $key => $sort) {
                $query->orderBy($key, $sort);
            }
        }

        return $query;
    }
}
