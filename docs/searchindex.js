Search.setIndex({docnames:["gb","index","losses","metrics","nnet","notebooks","preprocessing","reweight","speedup","splot","uboost"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["gb.rst","index.rst","losses.rst","metrics.rst","nnet.rst","notebooks.rst","preprocessing.rst","reweight.rst","speedup.rst","splot.rst","uboost.rst"],objects:{"hep_ml.gradientboosting":{UGradientBoostingClassifier:[0,1,1,""],UGradientBoostingRegressor:[0,1,1,""]},"hep_ml.gradientboosting.UGradientBoostingClassifier":{fit:[0,2,1,""],predict:[0,2,1,""],predict_proba:[0,2,1,""],staged_predict_proba:[0,2,1,""]},"hep_ml.gradientboosting.UGradientBoostingRegressor":{fit:[0,2,1,""],predict:[0,2,1,""],staged_predict:[0,2,1,""]},"hep_ml.losses":{AbstractLossFunction:[2,1,1,""],AdaLossFunction:[2,1,1,""],BinFlatnessLossFunction:[2,1,1,""],CompositeLossFunction:[2,1,1,""],KnnAdaLossFunction:[2,1,1,""],KnnFlatnessLossFunction:[2,1,1,""],LogLossFunction:[2,1,1,""],MAELossFunction:[2,1,1,""],MSELossFunction:[2,1,1,""],RankBoostLossFunction:[2,1,1,""],ReweightLossFunction:[2,1,1,""]},"hep_ml.losses.AbstractLossFunction":{compute_optimal_step:[2,2,1,""],fit:[2,2,1,""],prepare_new_leaves_values:[2,2,1,""],prepare_tree_params:[2,2,1,""]},"hep_ml.losses.AdaLossFunction":{fit:[2,2,1,""],hessian:[2,2,1,""],negative_gradient:[2,2,1,""],prepare_tree_params:[2,2,1,""]},"hep_ml.losses.CompositeLossFunction":{fit:[2,2,1,""],hessian:[2,2,1,""],negative_gradient:[2,2,1,""]},"hep_ml.losses.KnnAdaLossFunction":{compute_parameters:[2,2,1,""]},"hep_ml.losses.LogLossFunction":{fit:[2,2,1,""],hessian:[2,2,1,""],negative_gradient:[2,2,1,""],prepare_tree_params:[2,2,1,""]},"hep_ml.losses.MAELossFunction":{compute_optimal_step:[2,2,1,""],fit:[2,2,1,""],negative_gradient:[2,2,1,""],prepare_new_leaves_values:[2,2,1,""],prepare_tree_params:[2,2,1,""]},"hep_ml.losses.MSELossFunction":{compute_optimal_step:[2,2,1,""],fit:[2,2,1,""],hessian:[2,2,1,""],negative_gradient:[2,2,1,""],prepare_tree_params:[2,2,1,""]},"hep_ml.losses.RankBoostLossFunction":{fit:[2,2,1,""],hessian:[2,2,1,""],negative_gradient:[2,2,1,""],prepare_new_leaves_values:[2,2,1,""]},"hep_ml.losses.ReweightLossFunction":{fit:[2,2,1,""],negative_gradient:[2,2,1,""],prepare_new_leaves_values:[2,2,1,""],prepare_tree_params:[2,2,1,""]},"hep_ml.metrics":{BinBasedCvM:[3,1,1,""],BinBasedSDE:[3,1,1,""],BinBasedTheil:[3,1,1,""],KnnBasedCvM:[3,1,1,""],KnnBasedSDE:[3,1,1,""],KnnBasedTheil:[3,1,1,""]},"hep_ml.nnet":{AbstractNeuralNetworkClassifier:[4,1,1,""],AbstractNeuralNetworkRegressor:[4,1,1,""],MLPClassifier:[4,1,1,""],MLPMultiClassifier:[4,1,1,""],MLPRegressor:[4,1,1,""],PairwiseNeuralNetwork:[4,1,1,""],PairwiseSoftplusNeuralNetwork:[4,1,1,""],RBFNeuralNetwork:[4,1,1,""],SimpleNeuralNetwork:[4,1,1,""],SoftmaxNeuralNetwork:[4,1,1,""],adadelta_trainer:[4,3,1,""],exp_log_loss:[4,3,1,""],exp_loss:[4,3,1,""],irprop_minus_trainer:[4,3,1,""],irprop_plus_trainer:[4,3,1,""],log_loss:[4,3,1,""],mse_loss:[4,3,1,""],sgd_trainer:[4,3,1,""],smooth_huber_loss:[4,3,1,""],squared_loss:[4,3,1,""]},"hep_ml.nnet.AbstractNeuralNetworkClassifier":{fit:[4,2,1,""],predict:[4,2,1,""],predict_proba:[4,2,1,""]},"hep_ml.nnet.AbstractNeuralNetworkRegressor":{fit:[4,2,1,""],predict:[4,2,1,""]},"hep_ml.preprocessing":{BinTransformer:[6,1,1,""],IronTransformer:[6,1,1,""]},"hep_ml.preprocessing.BinTransformer":{fit:[6,2,1,""],transform:[6,2,1,""]},"hep_ml.preprocessing.IronTransformer":{fit:[6,2,1,""],transform:[6,2,1,""]},"hep_ml.reweight":{BinsReweighter:[7,1,1,""],FoldingReweighter:[7,1,1,""],GBReweighter:[7,1,1,""]},"hep_ml.reweight.BinsReweighter":{compute_bin_indices:[7,2,1,""],fit:[7,2,1,""],predict_weights:[7,2,1,""]},"hep_ml.reweight.FoldingReweighter":{fit:[7,2,1,""],predict_weights:[7,2,1,""]},"hep_ml.reweight.GBReweighter":{fit:[7,2,1,""],predict_weights:[7,2,1,""]},"hep_ml.speedup":{LookupClassifier:[8,1,1,""]},"hep_ml.speedup.LookupClassifier":{check_dimensions:[8,2,1,""],convert_bins_to_lookup_index:[8,2,1,""],convert_lookup_index_to_bins:[8,2,1,""],fit:[8,2,1,""],predict:[8,2,1,""],predict_proba:[8,2,1,""],transform:[8,2,1,""]},"hep_ml.splot":{compute_sweights:[9,3,1,""]},"hep_ml.uboost":{uBoostBDT:[10,1,1,""],uBoostClassifier:[10,1,1,""]},"hep_ml.uboost.uBoostBDT":{decision_function:[10,2,1,""],feature_importances_:[10,4,1,""],fit:[10,2,1,""],predict:[10,2,1,""],predict_proba:[10,2,1,""],staged_decision_function:[10,2,1,""],staged_predict_proba:[10,2,1,""]},"hep_ml.uboost.uBoostClassifier":{fit:[10,2,1,""],predict:[10,2,1,""],predict_proba:[10,2,1,""],staged_predict_proba:[10,2,1,""]},hep_ml:{gradientboosting:[0,0,0,"-"],losses:[2,0,0,"-"],metrics:[3,0,0,"-"],nnet:[4,0,0,"-"],preprocessing:[6,0,0,"-"],reweight:[7,0,0,"-"],speedup:[8,0,0,"-"],splot:[9,0,0,"-"],uboost:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:property"},terms:{"0":[0,2,3,4,6,7,10],"0001":4,"001":4,"06":4,"09":2,"1":[0,2,3,4,6,7,9,10],"10":[2,3,4,6],"100":[0,2,4,7],"1000":[4,8],"10000":6,"128":6,"1410":2,"16":8,"1d":7,"1e":4,"2":[0,2,3,4,7,10],"20":[4,10],"200":7,"2001":0,"2015":2,"21":4,"25":8,"2d":7,"3":[0,2,7,10],"30":4,"3428":4,"4":2,"40":[7,10],"4140":2,"42":2,"5":[2,3,4,7,10],"50":[3,10],"5000":2,"500000000":8,"6":3,"600":4,"7":[3,4],"75":7,"8":[3,6,7],"9":[3,4],"case":[2,7,10],"class":[0,2,3,4,6,7,8,10],"default":[0,3,4,8,10],"do":[3,10],"float":[0,2,3,4,7,8,10],"function":[0,1,2,5,7,10],"import":[2,4,6,7,8,9,10],"int":[0,2,3,4,6,7,8,10],"long":3,"new":[0,2,4,7,8],"return":[0,2,4,6,7,8,9,10],"true":[0,2,6,7,8],"try":4,"while":[6,7,8],A:[0,2,10],Being:4,By:8,For:[3,7,9],If:[0,2,4,7,10],In:[0,4,8,10],It:[0,4],Such:2,The:[0,2,4,6,7,10],There:[0,10],These:[3,9],To:[1,2,4,7,8,10],With:7,_i:2,a_1:4,a_2:4,a_:2,ab:2,abil:4,abl:[4,8],absolut:2,abstractbinmetr:3,abstractflatnesslossfunct:2,abstractknnmetr:3,abstractlossfunct:[0,2],abstractmatrixlossfunct:2,abstractneuralnetworkclassifi:4,abstractneuralnetworkregressor:4,account:10,accuraci:7,achiev:2,activ:4,ad:2,adaboost:[4,10],adaboostclassifi:[4,10],adadelta:4,adadelta_train:4,adaloss:[2,4],adalossfunct:2,adapt:4,advanc:10,after:[0,1,2,4,6,7,9,10],aim:7,aka:[2,4],al:2,algorithm:[0,1,2,4,6,10],all:[0,2,6,7,8,10],allow:4,allow_wrong_sign:2,almost:7,alon:10,along:[2,3,6,7,10],alpha:2,also:[0,2,3,4,6,7,8,10],alwai:3,am:2,an:[2,4,7,10],analyt:1,ani:[0,1,4,6],anoth:7,anyth:6,apart:[2,6],appli:[4,6,7,8],applic:[4,7,8],approach:2,appropri:7,approxim:[0,2,7],ar:[0,1,2,3,4,5,6,7,8,9,10],arbitrari:4,architectur:4,aren:7,argument:6,arogozhnikov:[2,5],around:1,arrai:[0,2,4,6,7,8,9,10],arxiv:2,attent:[2,9],attribut:10,automat:[2,10],avail:[0,3,4,5],availabel:7,averag:[4,7],ax:4,axi:[3,6,7,8],b_:4,b_bkg:9,backgorund:2,background:[2,3,4,10],bad:2,base:[0,2,3,4,6,7,8,9,10],base_classifi:8,base_estim:[4,8,10],base_network:4,base_reweight:7,base_tre:10,baseestim:[2,6,7,8,10],bash:1,basi:4,batch:4,bck:3,bdt:[8,10],becom:7,befor:[2,7],being:[6,7],belong:4,below:4,best:0,beta:2,better:[2,3,7],between:[2,3,7,10],bin:[2,3,6,7,8],bin_edg:8,binari:[0,4,10],binbasedcvm:3,binbasedsd:3,binbasedtheil:3,binflatnesslossfunct:[2,10],binomi:[2,4],bins_indic:8,binsreweight:7,bintransform:6,bkg:9,black:4,bonsai:8,bool:[0,2,7,8],boost:[1,4,5,7,10],both:2,box:4,brilliant:4,brilliantli:9,bu:2,build:[7,8,10],built:10,c:[2,8],call:2,can:[2,3,4,6,7,8,9,10],capabl:7,carlo:7,cd:1,chang:4,channel:7,check:3,check_dimens:8,chi:7,citeseerx:4,classes_:10,classif:[0,1,2,4,8,10],classifi:[1,2,3,4,5,8,10],classifiermixin:[0,8,10],clean:2,clear:9,clf:[6,10],clip:2,clone:1,closest:2,clothes_iron:6,code:[1,4],coeffici:7,collect:8,column:[2,6,8],com:5,combin:[2,4,7,8,10],come:[2,6],common:7,compar:[2,6,8],compat:1,complex:[4,6],complic:3,composit:2,compositelossfunct:2,comput:[2,3,4,6,7,8,9,10],compute_bin_indic:7,compute_optimal_step:2,compute_paramet:2,compute_sweight:9,constant:2,construct:4,consumpt:2,contain:[2,3,6,7,8,9,10],continu:4,contribut:10,control:2,convent:[2,3,6],convert:8,convert_bins_to_lookup_index:8,convert_lookup_index_to_bin:8,correct:7,correctli:3,correl:[0,10],correspond:[2,8,10],cost:4,could:7,cpu:8,cramer:3,creat:4,cross:[2,4,7],crucial:3,crunch:1,cuda:8,current:[2,3],curv:1,custom:1,cut:[8,10],cvm:3,dalitz:10,data:[0,1,2,7,8,10],datafram:[0,6,8,9,10],dataset:[0,2,3,4,7,10],datfram:10,deal:1,decai:4,decis:[0,2,4,10],decision_funct:10,decisiontreeclassifi:10,decomposit:2,decreas:4,defin:[2,4],definit:4,demonstr:4,depend:2,depth:7,deriv:[0,2],descend:[0,2],descent:4,describ:[2,10],desir:[2,10],detail:[0,2,4,10],develop:2,devianc:[2,4],deviat:3,diagon:2,dict:[4,8],dict_kei:4,didn:7,differ:[1,2,3,4,6,7,10],differenti:4,dimens:[3,7],dimension:6,direct:4,disagr:7,distanc:3,distribut:[2,3,4,5,6,7,9],dive:4,divis:6,document:4,doe:10,doesn:7,doi:4,don:[3,4],done:2,dtype:6,dure:[4,7],e:[1,2,4,8,10],each:[0,2,3,4,6,7,8,9,10],earli:10,easi:7,easier:[1,4],econom:3,edg:[6,7,8],edu:4,effect:2,effici:[0,2,3,6,10],efficiency_step:10,element:2,els:2,en:6,encourag:4,energi:1,engin:1,enough:6,ensembl:[0,4,7,8,10],entropi:[2,4],environ:8,epoch:4,epsilon:4,equal:[7,9],error:[2,4,8],estim:[0,2,4,7,8,10],et:2,etc:[4,8],even:7,event:[0,2,3,4,7,8,9,10],exampl:1,exp:2,exp_log_loss:4,exp_loss:4,expect:[2,6],experi:4,explan:9,explod:7,exploss:2,exponenti:[2,4],exponentialloss:4,express:[2,4,5],extend:6,extend_to:6,f:2,f_bin:2,factor:4,fals:[0,2,6,8],fast:1,featur:[0,2,3,4,6,7,8,9,10],feature_importances_:10,feature_nam:8,feed:4,few:2,fight:[0,10],file:[1,4],fill:[1,8],filter:7,find:[5,7],fine:7,first:3,fit:[0,2,3,4,5,6,7,8,9,10],fl:2,fl_coeffici:2,flat:[2,6,10],flatness_loss:2,flatnessloss:2,flight_tim:[2,10],fold:7,foldingreweight:7,follow:[3,4,5,6],forget:3,format:1,formula:[0,3,6,7,8],forward:4,found:3,fraction:0,framework:4,frequent:[7,9],freund:2,friedman:0,from:[0,1,2,4,6,7,8,9,10],further:2,g:[4,10],gaussian:7,gb:0,gb_arg:7,gbreweight:[2,7],gener:[0,1,3],get:[2,7,8,10],github:[2,5],give:4,given:4,gligorov:8,global:[2,3,10],go:4,goal:10,goe:2,good:4,goodi:1,gpu:4,gradient:[1,4,7],gradientboost:[0,2,7],gradientboostingclassifi:0,greater:10,greedi:0,guarante:10,h1:4,h1_i:4,h2:4,h2_j:4,h:[0,4],h_i:4,h_j:4,ha:[7,10],half_lif:4,halflif:4,handi:6,hat:2,have:[2,3,4,7,8,10],heavi:[2,4,8],hep:[7,8,9],hep_ml:[0,2,3,4,5,6,7,8,9,10],here:[0,2,6,7],hessian:2,hessianlossfunct:2,hi:4,hidden:4,high:[1,7,8],higher:[2,3,7],hist:9,histogram:7,how:[7,8,10],howev:2,html:2,http:[2,4,5,6],huber:4,i:[2,8,10],id:[2,7],idea:[0,8],ident:7,ignor:[2,6],ij:[2,4],implement:[0,2,4,6,7,9,10],impli:7,improv:0,inaccur:7,includ:[1,7,10],increas:[4,6,7],index:[3,8],indic:[2,8,10],inform:[3,6,7,9],inherit:6,initi:[2,4,9],input:7,insid:[2,4,8],instanc:[0,7,10],int8:6,integ:[6,7,10],interfac:[1,2,3],introduc:2,io:2,ipython:[1,5],iron:4,irontransform:6,irprop:4,irprop_minus_train:4,irprop_plus_train:4,issu:1,ist:4,item:8,iter:[0,2,4],its:[7,10],j:[0,2,10],jupyt:5,just:9,k:[3,7],keep:[7,8],keep_trained_estim:8,kei:0,kept:8,kera:4,kind:2,knn:[2,3],knnadalossfunct:[2,10],knnbasedcvm:3,knnbasedsd:3,knnbasedtheil:3,knnflatnesslossfunct:[2,10],known:4,l2:4,l2_penalti:4,label:[0,2,3,4,6,8,10],label_i:2,label_j:2,lambda:7,languag:8,larg:2,layer:[4,6],leaf:[2,7],leaf_valu:2,learn:[0,1,2,4,7,8,10],learning_r:[0,4,7,10],leav:[2,4,6],left:7,len:7,leq:2,lesser:7,let:8,level:10,lhcb:8,librari:[0,1,4],life:1,like:[0,2,4,7,10],likelihood:2,limit:2,list:[0,2,3,4,8,10],ll:[1,5],local:10,log:2,log_loss:4,logist:[2,4],logloss:2,loglossfunct:2,look:2,lookup:8,lookup_indic:8,lookupclassifi:8,loos:6,loss:[0,1,7,10],loss_regular:7,m:[8,10],machin:[0,1,8],maelossfunct:2,mai:[0,2,6],main:[1,2,4,10],make:[1,2,4,6,7],mani:[4,6,7,8,10],manual:[6,8],map:2,mass12:3,mass23:3,mass:[2,3,9,10],mass_12:10,mass_23:10,master:5,math:1,matlab:1,matrix:[2,10],max_bin:6,max_cel:8,max_depth:[0,7,8,10],max_featur:[0,7],max_group:2,max_leaf_nod:[0,7],max_point:6,max_step:4,maxim:[4,6,7],maximum:10,mc_data:7,mc_weight:7,mean:[2,4,7],measur:3,median:7,member:2,memori:2,mess:4,meta:7,method:[1,2,4,7,10],metric:[1,5],million:8,min_samples_leaf:[0,7],min_samples_split:[0,7],min_step:4,minibatch:4,minim:[0,2,4,7],minimalist:4,minmax:4,minor:6,mise:3,mixtur:9,mlp:4,mlpclassifi:4,mlpmulticlassifi:4,mlpregressor:4,model:4,modif:[2,10],modifi:10,modul:[3,8,10],momentum:4,monoton:6,mont:7,more:[0,3,4,7,8,9,10],moreov:2,most:[0,4,7],mse:[2,4],mse_loss:4,mselossfunct:2,much:[4,7,8,10],multi:4,multidimension:7,multilay:4,multilayerperceptron:4,multipli:2,multivari:10,mxnet:4,n:7,n_bin:[2,3,7,8],n_class:[0,4,8,9,10],n_classes_:10,n_column:8,n_estim:[0,2,4,7,8,10],n_featur:[0,4,7,8,10],n_fold:7,n_neigh:7,n_neighbor:10,n_neighbour:[2,3,10],n_sampel:2,n_sampl:[0,2,4,7,8,9,10],n_thread:10,name:[2,4,6,10],natur:3,nearest:[2,3],need:1,neg:2,negative_gradi:2,negative_step:4,neigh:3,neighbor:2,neighbour:[2,3,7,10],neighbours_matrix:10,network:[1,5,6],neural:[1,5,6],new_testx:6,new_trainx:6,newton:2,nice:7,nn:4,nnet:[4,6],non:[0,2,3],none:[0,3,4,6,7,8,9,10],nonuniform:3,nonzero:2,normal:[4,7],note:[0,2],notebook:[1,5,9],number:[0,1,2,3,4,6,7,10],numer:6,numpi:[0,1,2,4,6,7,8,9,10],object:[2,7,10],observ:8,obtain:[2,8,9,10],off:10,onc:3,one:[0,2,4,6,7,8,10],ones:[2,3,7],onli:[0,2,3,4,7,10],oper:[1,6],opposit:4,optim:[1,2,4],option:[2,4,7,9,10],order:[2,7,10],org:[2,6],origin:[2,7,10],original_weight:7,other:[2,3,4,6,7,8,9],other_var:9,otherwis:6,our:3,output:4,over:[3,4,7],overfit:[2,4],overload:2,overrid:2,own:[4,10],p:[2,9],p_signal:9,packag:3,pai:[2,9],pain:1,pairwiseneuralnetwork:4,pairwisesoftplusneuralnetwork:4,panda:[0,6,8,9,10],paper:10,param:2,paramet:[0,2,3,4,6,7,8,9,10],part:[3,4,6,7,10],particl:10,pass:[2,4,6,7,9],penalti:2,penalty_pow:2,per:8,perceptron:4,perfect:10,perform:1,physic:1,pick:2,pickl:[4,7],pip:1,pipelin:[4,6],place:4,plain:10,plot:[1,9],plt:9,plug:6,point:[2,4,6],polynomialfeatur:4,popular:4,posit:8,positive_step:4,possibl:[6,8],power:[2,3,4],pre:6,precis:7,precomput:[3,8],pred:[2,4],pred_i:2,pred_j:2,predict:[0,1,2,3,4,7,10],predict_proba:[0,3,4,8,10],predict_weight:7,prefer:[2,4],prepar:[2,4,6,7,8],prepare_new_leaves_valu:2,prepare_tree_param:2,preprocess:[1,2,4],present:2,preserv:6,press:8,pressur:6,pretrain:4,pretransform:4,prevent:[2,4,7],principl:10,proba:10,probabl:[0,4,8,9,10],procedur:[2,7,10],process:[4,7],produc:10,proper:[2,10],properti:10,propos:0,provid:[0,2,4,7],psu:4,pt:[2,10],purpos:[0,1,4],put:[2,4,7],python:[1,9],pytorch:4,qualiti:[2,3,8],quantil:[7,8],queri:2,query_i:2,query_j:2,quit:3,r:[1,10],r_:2,radial:4,rais:8,random:7,random_st:[0,2,4,7,10],random_stream:4,randomforestclassifi:8,randomli:2,randomst:[7,10],rank:[0,2],rankboost:2,rankboostlossfunct:2,raphson:2,rate:[4,7,10],rather:4,rb:2,rbf:4,rbfneuralnetwork:4,real:7,realdata:7,realli:8,recommend:[1,6],reconstruct:9,reduc:2,region:2,regress:[0,2,4,7],regressor:[0,4,7],regressormixin:0,regular:[2,4],reliabl:7,remark:7,renorm:10,rep:[1,3],replac:8,report:1,repositori:[1,5,9],reproduc:7,request_column:2,requir:[0,1,2,3,7,10],respect:2,respons:7,result:[3,4,6,7,8],rew:2,reweight:[1,2,5,9],reweighter_bas:7,reweighter_multipli:7,reweightermixin:7,reweightlossfunct:2,rewritten:8,right:3,rogozhnikov:2,role:[2,7],root:1,root_numpi:1,roughli:2,row:[2,10],row_norm:2,rule:[6,7],run:7,s:[2,4,8],same:[2,3,7,10],samm:10,sampl:[0,2,4,6,7,9,10],sample_weight:[0,2,3,4,6,8,9,10],save:8,scale:[3,6],scaler:[4,6],scikit:[1,2],score_j:2,sde:3,search:2,second:[2,8],see:[0,2,4,6,7,8,9,10],select:[2,3,4,8,10],self:[0,4,6,7,8,10],sensit:6,separ:2,sequenc:[0,7,10],set:[2,6,8,10],sever:[0,7],sgd:4,sgd_trainer:4,shall:[2,7],shape:[0,2,4,7,8,9,10],shell:1,should:[2,4,9,10],show:8,shrink:10,sigmoid:4,sign:2,signal:[2,3,4,7,9,10],similar:3,simpl:[4,6,8,9],simpleneuralnetwork:[4,6],simul:7,sinc:3,singl:[2,8],situat:2,size:[0,4,7],skip:[0,7],sklearn:[0,1,2,4,6,7,8,10],slower:3,small:[4,6],smooth:[4,7,10],smooth_huber_loss:4,so:[2,3,4,6,7,8],softmax:4,softmaxneuralnetwork:4,softplu:4,some:[2,4,6,8,9,10],sourc:[0,2,3,4,6,7,8,9,10],space:[2,6],special:[0,6,7,8],specif:4,specifi:10,speed:[4,6,8,10],speedup:8,split:[7,8],splitter:0,splot:[1,5,7],squar:[2,4,7],squared_loss:4,stabil:[4,7],stabl:[3,4,7],stage:[0,3,7,10],staged_decision_funct:10,staged_predict:0,staged_predict_proba:[0,10],standalon:9,standard:[0,2,3,4],standardscal:4,start:4,state:[2,7],statist:7,step:[0,2,4],steven:10,still:8,stochast:4,stop:10,str:[2,3],string:[4,10],subsampl:[0,2,7,10],sum:[0,9],sum_:[2,4],sum_i:2,sum_j:2,summari:4,support:[0,2,4,6,10],sure:7,sweight:[7,9],symmetr:[6,7],t:[3,4,7],tabl:8,tail:4,take:[4,7,8,10],taken:0,tanh:4,target:[0,2,4,7,10],target_effici:10,target_rcp:3,target_weight:7,techniqu:[7,9],termin:[1,2,10],terminal_region:2,test_data:10,testx:[6,8],text:2,tha:10,than:[3,4,7,10],theano:[1,4],thei:7,theil:3,them:3,thi:[0,2,3,4,6,7,8,9,10],those:[0,3,4,7],though:8,thread:10,threshold:3,thu:2,time:[0,2,4,7,8],ting:5,tmva:1,togeth:8,too:[4,10],tool:8,tracker:1,trade:10,tradeoff:[2,7],train:[0,2,4,6,7,8,10],train_data:10,train_featur:[0,2,10],train_label:10,train_weight:10,trainer:1,trainer_paramet:4,traini:2,trainw:2,trainx:[2,6],transform:[1,4,6,8],transformermixin:6,tree:[0,2,5,7],tree_target:2,tree_weight:2,trigger:8,trivial:4,tupl:2,turn:6,two:[0,2,3,4,7],txt:1,type:1,typic:[2,7,9,10],uboost:1,uboostbdt:10,uboostclassifi:10,ugradientboostingbas:0,ugradientboostingclassifi:[0,2,7],ugradientboostingregressor:0,unavail:4,unbias:7,unfortun:3,uniform:[2,3,5,6,10],uniform_featur:[2,3,10],uniform_label:[2,3,10],uniform_vari:10,uniforming_r:10,unit:4,unstabl:7,up:4,update_iter:2,update_tre:0,us:[0,1,2,3,4,6,7,8,9,10],usabl:4,usag:2,user:4,usual:[2,3,4,10],v:8,valid:7,valu:[0,2,3,7,10],variabl:[0,2,3,7,9,10],varianc:2,variou:0,vector:[1,2],verbos:7,veri:[0,2,4,6,8],version:[0,3,4,7,10],viewdoc:4,von:3,vote:7,vote_funct:7,vs:2,w:[2,4],w_0:2,w_:2,w_i:2,wa:[2,3,4],wai:7,want:[2,3,4],we:[2,3,4,7,10],web:1,weight:[2,4,6,7,8,9,10],well:[4,10],when:[2,4],where:[2,8],whether:2,which:[0,2,3,4,6,7,8,10],wiki:6,wikipedia:6,william:[8,10],without:[1,10],work:[2,4,6,7],wrapper:1,write:4,written:4,wrong:2,x:[0,2,3,4,6,7,8,10],xgboost:0,y:[0,2,3,4,6,8,10],y_i:2,y_j:2,y_pred:2,you:[1,3,4,5,6,8,9],your:[1,4],zero:[2,10]},titles:["Gradient boosting","hep_ml documentation","Losses for Gradient Boosting","Metric functions","Neural networks","Code Examples","Preprocessing data","Reweighting algorithms","Fast predictions","sPlot","uBoost"],titleterms:{"function":[3,4],algorithm:7,boost:[0,2],code:5,content:1,custom:4,data:6,develop:1,document:1,exampl:[2,3,4,5,6,7,8,9,10],fast:8,gradient:[0,2],hep_ml:1,instal:1,interfac:4,link:1,loss:[2,4],metric:3,network:4,neural:4,predict:8,preprocess:6,project:1,recommend:4,relat:1,reweight:7,splot:9,trainer:4,uboost:10}})