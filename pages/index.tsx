"use client";
import Image from 'next/image';
import {useEffect} from "react";
import useSWR from 'swr';
import {Item} from "../models/Item";
import Loader from "../components/loader";
import {JobLoc} from "../models/JobLoc";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {Variable} from "../models/Variable";
import RangeSlider from "../components/range-slider";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
    const searchParams = useSearchParams();
    const {data: jobLocs, error: errJobLoc, isLoading: isLoadingJobLoc} = useSWR<Array<JobLoc>>(`/api/job-loc`, fetcher);
    const {data: variables, error: errVariable, isLoading: isLoadingVariable} = useSWR<Array<Variable>>(`/api/variable`, fetcher);
    const {data: items, error: errItem, isLoading: isLoadingItem} = useSWR<Array<Item>>(`/api/item/${searchParams.get('jobLocId') ?? '1'}`, fetcher);
    const {data: engages, error: errEngage, isLoading: isLoadingEngage} = useSWR<Array<Item>>(`/api/engage/${searchParams.get('jobLocId') ?? '1'}`, fetcher);
    const {data: enables, error: errEnable, isLoading: isLoadingEnable} = useSWR<Array<Item>>(`/api/enable/${searchParams.get('jobLocId') ?? '1'}`, fetcher);
    const {data: energizes, error: errEnergize, isLoading: isLoadingEnergize} = useSWR<Array<Item>>(`/api/energize/${searchParams.get('jobLocId') ?? '1'}`, fetcher);
    // useEffect(() => {
    //     getData();
    // }, []);
    //
    // const getData = async () => {
    //     const items = await prisma.item.findMany();
    //     console.log(items);
    // };

    return (
        <main className="w-full flex min-h-screen items-center p-4">
            <div className="flex flex-col gap-2">
                <div className="z-10 w-full items-center font-mono text-sm lg:flex my-2 p-2 gap-2">
                    <div className="flex z-10 w-full items-center font-mono text-sm lg:flex my-2 p-2 gap-2">
                        <div className="mb-32 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
                            <div className="flex gap-4 group rounded-lg border border-white px-5 py-4">
                                <h2 className="text-2xl font-semibold">Engange</h2>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">Before</p>
                                    <p className="m-0 max-w-[30ch] text-sm opacity-50">1200</p>
                                </div>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">After</p>
                                    <h4 className="text-xl font-semibold">1300</h4>
                                </div>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">Increase</p>
                                    <p className="m-0 max-w-[30ch] text-sm opacity-50">1 %</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-32 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
                            <div className="flex gap-4 group rounded-lg border border-white px-5 py-4">
                                <h2 className="text-2xl font-semibold">Enable</h2>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">Before</p>
                                    <p className="m-0 max-w-[30ch] text-sm opacity-50">1200</p>
                                </div>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">After</p>
                                    <h4 className="text-xl font-semibold">1300</h4>
                                </div>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">Increase</p>
                                    <p className="m-0 max-w-[30ch] text-sm opacity-50">1 %</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-32 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
                            <div className="flex gap-4 group rounded-lg border border-white px-5 py-4">
                                <h2 className="text-2xl font-semibold">Energize</h2>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">Before</p>
                                    <p className="m-0 max-w-[30ch] text-sm opacity-50">1200</p>
                                </div>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">After</p>
                                    <h4 className="text-xl font-semibold">1300</h4>
                                </div>
                                <div
                                    className="rounded-lg border p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    <p className="font-bold">Increase</p>
                                    <p className="m-0 max-w-[30ch] text-sm opacity-50">1 %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-x-2">
                    <div className="flex flex-col gap-2">
                        {isLoadingJobLoc ? <Loader/> : jobLocs.map((v: JobLoc, i: number) => <Link
                            key={`jobLoc-${i}`}
                            href={`/?jobLocId=${v.id}`}
                            className="rounded-lg border border-white p-2 w-64">
                            <p className="font-bold">{v.name}</p>
                            <p className="m-0 max-w-[30ch] text-sm opacity-50"></p>
                        </Link>)}
                    </div>
                    <div className="overflow-x-auto bg-white relative rounded-xl max-w-5xl">
                        <div className="shadow-sm">
                            <table className="border-collapse table-auto w-full text-sm">
                                <thead>
                                <tr>
                                    <th rowSpan={2} className="text-center border dark:border-slate-600 font-medium p-4 pl-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                        Division
                                    </th>
                                    {isLoadingVariable ? <th></th> : variables.map((v: Variable, i: number) => <th key={`variable-${i}`} colSpan={2} className="text-center border dark:border-slate-600 font-medium p-4 pl-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                        {v.name}
                                    </th>)}
                                </tr>
                                <tr>
                                    {isLoadingVariable ? <th></th> : variables.map((v: Variable, i: number) => <>
                                        <th key={`variable-bf-${i}`} className="text-center border dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                            BF
                                        </th>
                                        <th key={`variable-af-${i}`} className="text-center border dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                            AF
                                        </th>
                                    </>)}
                                </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-slate-800">
                                {(isLoadingVariable || isLoadingItem) ? <tr>
                                    <td>
                                        <Loader/>
                                    </td>
                                </tr> : <>
                                    {
                                        items.reduce((acc, current) => {
                                            const x = acc.find(item => item.division.id === current.division.id);
                                            if (!x) {
                                                return acc.concat([current]);
                                            } else {
                                                return acc;
                                            }
                                        }, []).map((v: Item, i: number) => <tr key={`item-${i}`}>
                                            <td key={`variable-item-bf-${i}`} className="text-center border border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                                {v.division.name}
                                            </td>
                                            {
                                                variables.map((v1: Variable, i1: number) => items.filter((v2: Item) => v2.division.id === v.division.id && v2.variable.id === v1.id)
                                                        .map((v2: Item, i2: number) =>
                                                            <>
                                                                <td key={`variable-item-bf-${i2}`} className="text-center border border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                                                    {v2.value_bf}
                                                                </td>
                                                                <td key={`variable-item-af-${i2}`} className="text-center border border-slate-200 dark:border-slate-600 p-4 pl-8">
                                                                    <div className="w-24">
                                                                        <RangeSlider range={5} defaultValue={v2.value_af}/>
                                                                    </div>
                                                                </td>
                                                            </>
                                                        ))
                                            }
                                        </tr>)
                                    }
                                </>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
