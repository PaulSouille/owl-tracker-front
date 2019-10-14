
export default interface PlayerStats {
    playerId: number;
    teamId: number;
    name:string;
    role: string;
    team: string;
    eliminations_avg_per_10m: number;
    deaths_avg_per_10m: number;
    ultimates_earned_avg_per_10m: number;
    final_blows_avg_per_10m: number;
    time_played_total: number;
}
