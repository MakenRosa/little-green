import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './SustainabilityReports.module.scss';

const SustainabilityReports = () => {
    const reports = [
        {
            title: 'Relatório de Sustentabilidade 2023',
            description: 'Nosso progresso em direção aos objetivos de sustentabilidade em 2023.',
            downloadLink: '#'
        },
        {
            title: 'Relatório de Sustentabilidade 2022',
            description: 'Revisão de nossas iniciativas e desempenho de sustentabilidade em 2022.',
            downloadLink: '#'
        },
        {
            title: 'Relatório de Diversidade 2023',
            description: 'Uma visão geral da diversidade em nossa comunidade acadêmica em 2023.',
            downloadLink: '#'
        },
        {
            title: 'Relatório de Diversidade 2022',
            description: 'Uma análise da diversidade e inclusão em nossa instituição em 2022.',
            downloadLink: '#'
        },
        {
            title: 'Relatório de Educação Ambiental 2023',
            description: 'Insights sobre nossos programas de educação ambiental em 2023.',
            downloadLink: '#'
        },
        {
            title: 'Relatório de Educação Ambiental 2022',
            description: 'Revisão de nossos programas de educação ambiental em 2022.',
            downloadLink: '#'
        }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Relatórios de Sustentabilidade</h2>
            <p className={styles.description}>Acompanhe nosso progresso em direção aos objetivos de sustentabilidade. Aqui você pode baixar nossos relatórios de sustentabilidade mais recentes.</p>
            <div className={styles.reports}>
                {reports.map((report, index) => (
                    <div key={index} className={styles.report}>
                        <h3 className={styles.reportTitle}>{report.title}</h3>
                        <p className={styles.reportDescription}>{report.description}</p>
                        <Button variant="success" href={report.downloadLink}>Baixar Relatório</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SustainabilityReports;
