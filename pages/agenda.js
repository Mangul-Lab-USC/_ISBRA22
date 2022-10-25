import styles from "../styles/general.module.css";
function Agenda() {
  return (
    <>
    <h1>Program agenda</h1>
    <div className={styles.notice}>
        <a className={styles.link} rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1KhirD4vE5u7A2cJLCvn2ZFUQ-A0pF0WC/view?usp=sharing">
          ISBRA 2022 Program (preliminary draft)
        </a>
    </div>
    <h1>Monday, November 14th, 2022</h1>
    <table>
    <thead>
      <tr>
        <td>7:00pm-<br></br>9:00pm</td>
        <td><b>Reception</b></td>
      </tr>
    </thead>
    </table>
    <p></p>
    <h1>Tuesday, November 15th, 2022</h1>
    <table>
    <thead>
      <tr>
        <th>9:00am-<br></br>10:00am</th>
        <th>Plenary Session Room: TBA<br></br>Chair: TBA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session1:<br></br>Keynote Talk<br></br>Eugene Koonin, National Center for Biotechnology Information,<br></br>National Institutes of Health</td>
      </tr>
      <tr>
        <td>10:00am-<br></br>10:20am</td>
        <td>Coffee break</td>
      </tr>
    </tbody>
    </table>
    <p></p>
    <table>
    <thead>
      <tr>
        <th>10:20am-<br></br>12:20pm</th>
        <th colspan="2">Parallel Sessions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 2A:<br></br>Evolution, Ecology, Comparative<br></br>Genomics<br></br>Room:<br></br>Chair:<br></br></td>
        <td>Session 2B:<br></br>Machine Learning: Medical<br></br>Records/Data, Protein Domains<br></br>Room:<br></br>Chair:<br></br></td>
      </tr>
      <tr>
        <td>10:20am-<br></br>10:40am</td>
        <td>BLASTphylo - an Interactive Web Tool<br></br>for Taxonomic and Phylogenetic<br></br>Analysis of Genes, Susanne Zabel,<br></br>Jennifer Müller, Friedrich Götz and KayNieselt</td>
        <td>Automatic ICD Coding based on Multi-<br></br>granularity Feature Fusion, Ying Yu, Han<br></br>Jiang, Junwen Duan and Jianxin Wang</td>
      </tr>
      <tr>
        <td>10:40am-<br></br>11:00am</td>
        <td>A Clonal Evolution Simulator for<br></br>Planning Somatic Evolution Studies,<br></br>Arjun Srivatsa, Haoyun Lei and Russell<br></br>Schwartz</td>
        <td>Fusing Label Relations for Chinese EMR<br></br>Named Entity Recognition with Machine<br></br>Reading Comprehension, Shuyue Liu,<br></br>Junwen Duan, Feng Gong, Hailin Yueand Jianxin Wang</td>
      </tr>
      <tr>
        <td>11:00am-<br></br>11:20am</td>
        <td>Transposition Distance Considering<br></br>Intergenic Regions for Unbalanced<br></br>Genomes, Alexsandro Oliveira Alexandrino, Andre Rodrigues Oliveira,Geraldine Jean, Guillaume Fertin,Ulisses Dias and Zanoni Dias</td>
        <td>Effectively Training MRI Reconstruction<br></br>Network via Sequentially Using<br></br>Undersampled k-Space Data with Very Low Frequency Gaps, Tian-Yi Xing,<br></br>Xiao-Xin Li, Zhi-Jie Chen, Xi-Yu Zhengand Fan Zhang</td>
      </tr>
      <tr>
        <td>11:20am-<br></br>11:40am</td>
        <td>Interactions between culturable bacteria<br></br>are predicted by individual species’<br></br>growth, Jonathan Friedman and Einat<br></br>Nestor</td>
        <td>Research on the prediction method of<br></br>disease classification based on imaging<br></br>features, Yu Sheng, Shengyi Yang,<br></br>Huirong Hu and Guihua Duan</td>
      </tr>
      <tr>
        <td>11:40am-<br></br>12:00pm</td>
        <td>Using variable-order Markov models to<br></br>improve metagenomics binning and<br></br>genome taxonomic classification,<br></br>Leibovich Or, Yochai Meir and Itai<br></br>Sharon</td>
        <td>NIDN: Medical Code Assignment via<br></br>Note-Code Interaction Denoising<br></br>Network, Xiaobo Li, Yijia Zhang,<br></br>Xingwang Li, Jian Wang and Mingyu Lu</td>
      </tr>
      <tr>
        <td>12:00pm-<br></br>12:20pm</td>
        <td>Revisiting SVDQuartets: Performance<br></br>under Real Life Values and<br></br>Improvements, Shay Hakim and Sagi<br></br>Snir</td>
        <td>GNN-Dom: an unsupervised method for<br></br>protein domain partition via protein<br></br>contact map, Wang Lei and Yan Wang</td>
      </tr>
      <tr>
        <td>12:20pm-<br></br>2:00pm</td>
        <td colspan="2">Lunch Break</td>
      </tr>
    </tbody>
    </table>
    <p></p>
    <table>
    <thead>
      <tr>
        <th>2:00pm-<br></br>3:00pm</th>
        <th>Plenary Session Room:<br></br>Chair:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 3:<br></br>Keynote Talk<br></br>Talk Title<br></br>Tamar Friedlander, Faculty of Agriculture,<br></br>Hebrew University of Jerusalem</td>
      </tr>
      <tr>
        <td>3:00pm-<br></br>3:20pm</td>
        <td>Coffee Break</td>
      </tr>
    </tbody>
    </table>
    <p></p>
    <table>
    <thead>
      <tr>
        <th>3:20pm-<br></br>5:40pm</th>
        <th colspan="2">Parallel Sessions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 4A:<br></br>Cancer, SARS-CoV-2<br></br>Room:<br></br>Chair:</td>
        <td>Session 4B:<br></br>Networks, Machine Learning<br></br>Room:<br></br>Chair:</td>
      </tr>
      <tr>
        <td>3:20pm-<br></br>3:40pm</td>
        <td>Tumor type-specific survival associations<br></br>of transcriptomic-weighted codon usage<br></br>and tRNA abundance, Douglas Meyer,<br></br>Haim Bar, Anton Komar, Ryan Hunt,<br></br>Michael DiCuccio and Chava Kimchi-<br></br>Sarfaty</td>
        <td>STgcor: A Distribution-based Correlation<br></br>Measurement Method for Spatial<br></br>Transcriptome Data, Xiaoshu Zhu,<br></br>Liyuan Pang, Wei Lan, Shuang Meng<br></br>and Xiaoqing Peng</td>
      </tr>
      <tr>
        <td>3:40pm-<br></br>4:00pm</td>
        <td>A Network-Based Voting Method for<br></br>Identification and Prioritization of<br></br>Personalized Cancer Driver Genes, Han<br></br>Li, Feng Li, Junliang Shang, Xikui Liu<br></br>and Yan Li</td>
        <td>An SMT-based Framework for<br></br>Reasoning about Discrete Biological<br></br>Models, Boyan Yordanov, Sara-Jane<br></br>Dunn, Colin Gravill, Hillel Kugler and<br></br>Christoph M. Wintersteiger</td>
      </tr>
      <tr>
        <td>4:00pm-<br></br>4:20pm</td>
        <td>A Tensor Robust Model Based on<br></br>Enhanced Tensor Nuclear Norm and<br></br>Low-Rank Constraint for Multi-view<br></br>Cancer Genomics Data, Qian Qiao, Sha-<br></br>Sha Yuan, J. Shang and Jin-Xing Liu</td>
        <td>Power and limitations of hybrid system<br></br>models for gene regulatory networks,<br></br>Juris Viksna, Kārlis Čerāns, Lelde Lace<br></br>and Gatis Melkus</td>
      </tr>
      <tr>
        <td>4:20pm-<br></br>4:40pm</td>
        <td>Efficient Distance-Based Reconstruction<br></br>of Large-Scale Single-Cell Phylogenies<br></br>from Copy Number Data, Samson<br></br>Weiner and Mukul S. Bansal</td>
        <td>Graph Random Forest: A graph<br></br>embedded algorithm for identifying<br></br>highly connected important features, Leqi<br></br>Tian and Tianwei Yu</td>
      </tr>
      <tr>
        <td>4:40pm-<br></br>5:00pm</td>
        <td>Evaluating the Robustness of ML Models<br></br>in SARS-CoV-2 Genome Sequences<br></br>Generated Using TGS Technology,<br></br>Bikram Sahoo, Sarwan Ali, Pin-Yu Chen,<br></br>Murray Patterson and Alex Zelikovsky</td>
        <td>Simulating Spiking Neural Networks<br></br>based on SW26010pro, Zhichao Wang,<br></br>Xuelei Li, Yi Pan and Yanjie Wei</td>
      </tr>
      <tr>
        <td>5:00pm-<br></br>5:20pm</td>
        <td>t-SNE Highlights Phylogenetic and<br></br>Temporal Patterns of SARS-CoV-2<br></br>Spike and Nucleocapsid Protein<br></br>Evolution, Gaik Tamazian, Andrey<br></br>Komissarov, Dmitry Kobak, Dmitry<br></br>Polyakov, Evgeny Andronov, Sergei<br></br>Nechaev, Sergey Kryzhevich, Yuri<br></br>Porozov and Eugene Stepanov</td>
        <td>A methodology for classifying tissue-<br></br>specific metabolic and inflammatory<br></br>receptor functions applied to<br></br>subcutaneous and visceral adipose,<br></br>Judith Somekh and Gur Arye</td>
      </tr>
      <tr>
        <td>5:20pm-<br></br>5:40pm</td>
        <td>A rigorous benchmarking of methods for<br></br>SARS-CoV-2 lineage quantification in<br></br>wastewater, Viorel Munteanu, Nitesh<br></br>Kumar Sharma, Bohdan Tyshchenko,<br></br>Alina Frolova, Serghei Knyazev and<br></br>Serghei Mangul</td>
        <td>Deep learning-enhanced MHC-II<br></br>presentation prediction and peptidome<br></br>deconvolution, Juntao Deng and Min Liu</td>
      </tr>
      <tr>
        <td>6:00pm-<br></br>8:00pm</td>
        <td colspan="2">Banquet</td>
      </tr>
    </tbody>
    </table>
    <h1>Wednesday, November 16th, 2022</h1>
    <table>
    <thead>
      <tr>
        <th>9:00am-<br></br>10:00am</th>
        <th>Plenary Session Room: TBA<br></br>Chair: TBA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 5:<br></br>Keynote Talk<br></br>Talk Title<br></br>Mona Singh, Professor of Computer Science,<br></br>Princeton University</td>
      </tr>
      <tr>
        <td>10:00am-<br></br>10:20am</td>
        <td>Coffee Break</td>
      </tr>
    </tbody>
    </table>
    <p></p>
    <table>
    <thead>
      <tr>
        <th>10:20am-<br></br>12:20pm</th>
        <th colspan="2">Parallel Sessions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 5A:<br></br>Clustering, Sequence Analysis<br></br>Room:<br></br>Chair:</td>
        <td>Session 5B:<br></br>Privacy, PPI, Pathways<br></br>Room:<br></br>Chair:</td>
      </tr>
      <tr>
        <td>10:20am-<br></br>10:40am</td>
        <td>Entropy Based Clustering of Viral<br></br>Sequences, Akshay Juyal, Mark<br></br>Grinshpon, Daniel Novikov, Roya<br></br>Hosseini and Alex Zelikovsky</td>
        <td>Private Epigenetic PaceMaker Detector<br></br>using Homomorphic Encryption, Meir<br></br>Goldenberg, Adi Akavia and Sagi Snir</td>
      </tr>
      <tr>
        <td>10:40am-<br></br>11:00am</td>
        <td>FEED: a feature extraction method based<br></br>on gene expression decomposition for<br></br>single-cell clustering, Chao Zhang,<br></br>Yunpei Xu, Lu He, Tao Zhang and<br></br>Hongdong Li</td>
        <td>MPCDDI: A Secure Multiparty<br></br>Computation-based Deep Learning<br></br>Framework for Drug-drug Interaction<br></br>Predictions, Xia Xiao, Shaoliang Peng,<br></br>Shengyun Liu and Xiaoqi Wang</td>
      </tr>
      <tr>
        <td>11:00am-<br></br>11:20am</td>
        <td>ARGLRR: An Adjusted Random Walk<br></br>Graph Regularization Sparse Low-rank<br></br>Representation Method for Single-cell<br></br>RNA-sequencing Data Clustering, Zhen-<br></br>Chang Wang, Jin-Xing Liu, Jun-Liang<br></br>Shang, Ling-Yun Dai, Chun-Hou Zheng<br></br>and Juan Wang</td>
        <td>EMRShareChain: A Privacy-Preserving<br></br>EMR Sharing System Model Based on<br></br>the Consortium Blockchain, Xinglong<br></br>Zhang, Peng Xi, Wenjuan Liu and<br></br>Shaoliang Peng</td>
      </tr>
      <tr>
        <td>11:20am-<br></br>11:40pm</td>
        <td>An Efficient and User-friendly Software<br></br>for PCR Primer Design for Detection of<br></br>Highly Variable Bacteria, Dongzheng<br></br>Hu, Wubin Qu, Fan Tong, Xiangwen<br></br>Zheng, Jiangyu Li and Dongsheng Zhao</td>
        <td>Estimating enzyme expression and<br></br>metabolic pathway activity in mice,<br></br>Filipp Rondel, Roya Hosseini, Hafsa<br></br>Farooq and Alex Zelikovsky</td>
      </tr>
      <tr>
        <td>11:40am-<br></br>12:00pm</td>
        <td>Optimal sequence alignment to ED-<br></br>strings, Njagi Moses Mwaniki and Nadia<br></br>Pisanti</td>
        <td>Heterogeneous PPI network<br></br>representation learning for protein<br></br>complex identification, Peixuan Zhou,<br></br>Yijia Zhang, Fei Chen, Kuo Pang and<br></br>Mingyu Lu</td>
      </tr>
      <tr>
        <td>12:00pm-<br></br>12:20pm</td>
        <td>An Algorithm to Calculate the p-value of<br></br>the Monge-Elkan Distance, Petr Ryšavý<br></br>and Filip Železný</td>
        <td>Gaussian-enhanced Representation<br></br>Model for Extracting Protein-Protein<br></br>Interactions Affected by Mutations, Da<br></br>Liu, Yijia Zhang, Ming Yang, Fei<br></br>Chen and Mingyu Lu</td>
      </tr>
      <tr>
        <td>12:20pm-<br></br>2:00pm</td>
        <td colspan="2">Lunch Break</td>
      </tr>
    </tbody>
    </table>
    <p></p>
    <table>
    <thead>
      <tr>
        <th>2:00pm-<br></br>3:00pm</th>
        <th>Plenary Session Room:<br></br>Chair:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 6:<br></br>Keynote Talk<br></br>Talk Title<br></br>Michal Linial, Professor of Biochemistry and Bioinformatics,<br></br>Hebrew University of Jerusalem</td>
      </tr>
      <tr>
        <td>3:00pm-<br></br>3:20pm</td>
        <td>Coffee Break</td>
      </tr>
    </tbody>
    </table>
    <p></p>
    <table>
    <thead>
      <tr>
        <th>3:20pm-<br></br>5:20pm</th>
        <th colspan="2">Parallel Sessions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 7A:<br></br>Human Disease 1<br></br>Room:<br></br>Chair:</td>
        <td>Session 7B:<br></br>RNA, Viral Transmission/Genomics<br></br>Room:<br></br>Chair:</td>
      </tr>
      <tr>
        <td>3:20pm-<br></br>3:40pm</td>
        <td>A multi-view perspective on<br></br>predicting human diseases based on<br></br>gut microbiome features, Efrat Muller,<br></br>Itamar Shiryan and Elhanan Borenstein</td>
        <td>Predict CircRNA-disease Associations<br></br>Based on Random Walk with Restart,<br></br>Principal Component Analysis and<br></br>Random Forest, Qiang Luo and Minzhu<br></br>Xie</td>
      </tr>
      <tr>
        <td>3:40pm-<br></br>4:00pm</td>
        <td>Multi-atlas Representations based on<br></br>Transformer for Autism Spectrum<br></br>Disorders Diagnosis, Jianchun Zhu, Jin<br></br>Liu, Junbin Mao, Yu Sheng and Yi Pan</td>
        <td>Distance Profiles of Optimal RNA<br></br>Foldings, Jinyi Liu, Isabel Duan, Santi<br></br>Santichaivekin and Ran Libeskind-Hadas</td>
      </tr>
      <tr>
        <td>4:00pm-<br></br>4:20pm</td>
        <td>M-US-EMRs: A Multi-Modal Data<br></br>Fusion Method of Ultrasonic Images and<br></br>Electronic Medical Records Used for<br></br>Screening of Coronary Heart Disease,<br></br>Bokai Yang, Yingnan Zuo, Shunxiang<br></br>Yang, G. Deng, S. Zhu and Yunpeng Cai</td>
        <td>A Locality-Constrained Linear Coding-<br></br>Based Ensemble Learning Framework<br></br>for Predicting Potentially Disease-<br></br>Associated MiRNAs, Yi Shen, Ying-Lian<br></br>Gao, Juan Wang, Bo-Xin Guan and Jin-<br></br>Xing Liu</td>
      </tr>
      <tr>
        <td>4:20pm-<br></br>4:40pm</td>
        <td>Machine Learning based biomarker<br></br>discovery for chronic kidney disease–<br></br>mineral and bone disorder (CKD-MBD),<br></br>Xiang Shao, Yukuan Lou, Weixin Kong,<br></br>Yutin Li, Qianpan Liu and Suhua Zhang</td>
        <td>Global profiling and annotation of<br></br>templated isomiRs dynamics across<br></br>Caenorhabditis elegans development,<br></br>Ganesh Panzade, Li Li, Shilpa Hebbar,<br></br>Isana Veksler-Lublinsky and Anna<br></br>Zinovyeva</td>
      </tr>
      <tr>
        <td>4:40pm-<br></br>5:00pm</td>
        <td>TDCOSR: A multimodality fusion<br></br>framework for association analysis<br></br>between genes and ROIs of Alzheimer’s<br></br>disease, Qi Zou, Yan Sun, Feng Li, Juan<br></br>Wang, Jin-Xing Liu and Junliang Shang</td>
        <td>Unlocking capacities of genomics for the<br></br>COVID-19 response and future<br></br>pandemics, Serghei Mangul and Alex<br></br>Zelikovsky</td>
      </tr>
      <tr>
        <td>5:00pm-<br></br>5:20pm</td>
        <td>Policy-based Hypertension Monitoring<br></br>using Formal Runtime Verification<br></br>Monitors, Abhinandan Panda, Srinivas<br></br>Pinisetty and Partha Roop</td>
        <td>Inference of viral transmission networks<br></br>under structural constraints, Kiril<br></br>Kuzmin, Sagi Snir, Yury Khudyakov and<br></br>Pavel Skums</td>
      </tr>
      <tr>
        <td>6:00pm-<br></br>8:00pm</td>
        <td colspan="2">ISBRA 2022 Organizer Dinner</td>
      </tr>
    </tbody>
    </table>
    <h1>Thursday, November 17th, 2022</h1>
    <table>
    <thead>
      <tr>
        <th>9:00am-<br></br>10:00am</th>
        <th>Plenary Session Room: TBA<br></br>Chair: TBA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 8:<br></br>Keynote Talk<br></br>Talk Title<br></br>Abraham B Korol, Professor, Institute of Evolution,<br></br>University of Haifa</td>
      </tr>
      <tr>
        <td>10:00am-<br></br>10:20am</td>
        <td>Coffee Break</td>
      </tr>
    </tbody>
    </table>
    <table>
    <thead>
      <tr>
        <th>10:20am-<br></br>11:40am</th>
        <th colspan="2">Parallel Sessions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 9A:<br></br>Human Disease 2<br></br>Room:<br></br>Chair:</td>
        <td>Session 9B:<br></br>Drug Interaction/Association<br></br>Room:<br></br>Chair:</td>
      </tr>
      <tr>
        <td>10:20am-<br></br>10:40am</td>
        <td>Applying machine learning and leave-<br></br>pair-out cross-validation to a clinical and<br></br>steroidomics dataset to find predictors for<br></br>preeclampsia, Alexander Biehl</td>
        <td>MLMVFE: A Machine Learning<br></br>Approach Based on Muli-View Features<br></br>Extraction for Drug-Disease Associations<br></br>Prediction, Ying Wang, Ying-Lian Gao,<br></br>Juan Wang, Junliang Shang and Jin-Xing<br></br>Liu</td>
      </tr>
      <tr>
        <td>10:40am-<br></br>11:00am</td>
        <td>MMLN: Leveraging Domain Knowledge<br></br>for Multimodal Diagnosis, Haodi Zhang,<br></br>Chenyu Xu, Peirou Liang, Ke Duan, Hao<br></br>Ren, Weibin Cheng and Kaishun Wu</td>
        <td>Mixed expert Model For Drug-Target<br></br>Interaction Prediction, Honghui Lian, Zhi<br></br>Zeng, Xiang Li, Huan Wang, Guodong Li<br></br>and Ziwen Cui</td>
      </tr>
      <tr>
        <td>11:00am-<br></br>11:20am</td>
        <td>Transfer Learning for Semi-Supervised<br></br>3D Left Atrium Segmentation through<br></br>Dual-Task Consistency Framework,<br></br>Jiahao Chen, Ruohan Lin, Xiaobin Lan,<br></br>Rongxing Wang, Xipeng Pan and Yanju<br></br>Zhang</td>
        <td>Prediction of Drug-disease Relationship<br></br>on Heterogeneous Networks Based on<br></br>Graph Convolution, Jiancheng Zhong,<br></br>Pan Cui, Zuohang Qu, Qiu Xiao and<br></br>Yihong Zhu</td>
      </tr>
      <tr>
        <td>11:20am-<br></br>11:40am</td>
        <td>2D Photogrammetry Image of<br></br>Adolescent Idiopathic Scoliosis<br></br>Screening Using Deep Learning, Zhenda<br></br>Xu, Jiazi Ouyang, Qiang Gao, Aiqian<br></br>Gan, Qihua Zhou, Jiahao Hu and Song<br></br>Guo</td>
        <td>A Multimodal Data Fusion-based Deep<br></br>Learning Approach for Drug-Drug<br></br>Interaction Prediction, An Huang,<br></br>Xiaolan Xie, Xiaoqi Wang and Shaoliang<br></br>Peng</td>
      </tr>
      <tr>
        <td>11:40am-<br></br>12:00pm</td>
        <td colspan="2">Closing Remarks</td>
      </tr>
      <tr>
        <td>12:00 pm-<br></br>7:00pm</td>
        <td colspan="2">Lunch Break + Excursion</td>
      </tr>
    </tbody>
    </table>
    </>
  );
}
export default Agenda;